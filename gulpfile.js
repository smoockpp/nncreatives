'use strict';

var    gulp = require('gulp'),
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

gulp.task('concatScripts', function() {
  return gulp.src([
      'bower_components/jquery/dist/jquery.js',
      'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
      'scripts/ajax.js',
      'scripts/overlay.js',
      'scripts/sticky-nav.js',
      'scripts/fixes.js',
      'scripts/location-handler.js',
      'scripts/main.js'])


  .pipe(concat('app.js'))
  .pipe(babel({
          presets: ['es2015']
      }))
  .pipe(gulp.dest('scripts'));
});


gulp.task('minifyScripts', ['concatScripts'], function() {
  return gulp.src('scripts/app.js')
      .pipe(maps.init())
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(maps.write('./'))
      .pipe(gulp.dest('scripts'));
});



gulp.task('compileSass', function() {
  return gulp.src('scss/application.scss')
      .pipe(maps.init())
      .pipe(sass())
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
  gulp.watch('scripts/ajax.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/overlay.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/sticky-nav.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/fixes.js', ['concatScripts', 'minifyScripts']).on('change', reload);
  gulp.watch('scripts/location-handler.js', ['concatScripts', 'minifyScripts']).on('change', reload);
});



gulp.task('clean', function() {
  del(['dist', 'styles/application.css*', 'scripts/app.*.js*', 'scripts/babel']);
});

gulp.task('build', ['compileSass', 'minifyCSS', 'concatScripts', 'minifyScripts'], function() {
  return gulp.src(['styles/application.min.css','styles/application.css.map', 'scripts/app.min.js', 'index.html',
                   'data/**', 'fonts/**/*'], { base: './' })
             .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
