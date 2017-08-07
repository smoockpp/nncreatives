'use strict';

var    gulp = require('gulp'),
        rev = require('gulp-rev'),
      babel = require("gulp-babel"),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify'),
     rename = require('gulp-rename'),
       sass = require('gulp-sass'),
       maps = require('gulp-sourcemaps'),
   cleanCSS = require('gulp-clean-css'),
        del = require('del'),
browserSync = require('browser-sync').create(),
     reload = browserSync.reload;

function swallowError (error) {

 // If you want details of the error in the console
 console.log(error.toString())
 this.emit('end')
}

gulp.task('concatScripts', function() {
  return gulp.src([
    //   'bower_components/jquery/dist/jquery.js',
    'scripts/carousel-template.js',
    'scripts/media-queries.js',
      'scripts/visibility.js',
    //   'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
      'scripts/animations.js',
      'scripts/ajax/ajax-function.js',
      'scripts/ajax/treehouse-request.js',
      'scripts/ajax/projects-request.js',
      'scripts/sticky-nav.js',
      'scripts/fixes.js',
      'scripts/contact/contact.js',
      'scripts/main.js'])
  .pipe(concat('app.js'))
  .on('error', swallowError)
  .pipe(maps.write('./'))
  .pipe(babel({
          presets: ['es2015']
      }))
  .pipe(gulp.dest('scripts'));
});


gulp.task('minifyScripts', ['concatScripts'], function() {
  return gulp.src('scripts/app.js')
      .pipe(maps.init())
      .pipe(uglify())
      .on('error', swallowError)
      .pipe(rename('app.min.js'))
      .pipe(maps.write('./'))
      .pipe(gulp.dest('scripts'));
});



gulp.task('compileSass', function() {
  return gulp.src('scss/application.scss')
      .pipe(maps.init())
      .pipe(sass())
      .on('error', swallowError)
      .pipe(maps.write('./'))
      .pipe(gulp.dest('styles'));
});

gulp.task('minifyCSS', ['compileSass'], function() {
    return gulp.src([
            'styles/application.css'
            ])
        .pipe(cleanCSS())
        .pipe(rename('application.min.css'))
        .pipe(gulp.dest('styles'));
});

gulp.task('watchFiles', function() {
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });
  gulp.watch('scss/**/*.scss', ['compileSass', 'minifyCSS']).on('change', reload);

  gulp.watch('*.html').on('change', reload);
  gulp.watch('scripts/main.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/carousel-template.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/animations.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/ajax/ajax-function.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/ajax/projects-request.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/ajax/treehouse-request.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/sticky-nav.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/fixes.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/contact/contact.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/media-queries.js', ['concatScripts', 'minifyScripts']).on('change', reload);
});

gulp.task('versioning', function() {
	gulp.src(['dist/styles/*.css', 'dist/scripts/*.js'], {base: 'dist'})
		.pipe(gulp.dest('dist/'))  // copy original assets to build dir
		.pipe(rev())
		.pipe(gulp.dest('dist/'))  // write rev'd assets to build dir
		.pipe(rev.manifest({
        base: 'build/assets',
			  merge: true // merge with the existing manifest if one exists
		}))
		.pipe(gulp.dest('dist/'))  // write manifest to build dir
});



gulp.task('clean', function() {
  del(['dist', 'styles/application.css*', 'scripts/app.*.js*', 'scripts/babel']);
});

gulp.task('build', ['compileSass', 'minifyCSS', 'concatScripts', 'minifyScripts'], function() {
  return gulp.src(['styles/application.min.css','styles/application.css.map', 'scripts/app.min.js', 'index.html', 'about.html', 'portfolio.html',
                   'data/**', 'fonts/**/*'], { base: './' })
             .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
