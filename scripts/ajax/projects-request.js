'use strict';

const displayProjects = (data) => {
  let projects = [];
  let projectsDiv = $('#projects-flex');


  $.each(data, function(x, y) {
    let projectsDivHTML = ``;
    let modalContent = ``;
    let projectId = data[x].id;
    let projectName = data[x].name;
    let projectThumb = data[x].thumb_url;
    let projectImg = data[x].img_url;
    let projectDescription = data[x].description;
    let skills = [];
    let skillsHTML = '';
    $.each(data[x].skills, function(a, b) {
      let skill = data[x].skills[a];
      skillsHTML += '<p class="' + skill + '">' + skill + '</p>';

    });
    let projectGrade = data[x].grade;
    let projectIoUrl = data[x].github_io_url;
    let projectRepoUrl = data[x].github_repo_url;
    projectsDivHTML = `
    <div class="project" >
      <h4 class="project-h4">${projectName}</h4>
      <div class="image-zoom-pan">
        <div class="tile" data-scale="3" data-thumb="${projectThumb}" data-image="${projectImg}">
        </div>
      </div>
      <div class="skills-cont">
        <h5 class="heading">Skills used</h5>
        ${skillsHTML}
      </div>
      <div class="project-links">
        <a href="${projectIoUrl}" target="_blank" class="project-link btn btn-default btn-lg">Visit Page</a>
        <a href="${projectRepoUrl}" target="_blank" class="project-link btn btn-default btn-lg">Visit Repo</a>
      </div>
      <button class="btn btn-default btn-lg" data-toggle="modal"  data-target="#${projectId}">Read more</button>
    </div>
    <div class="modal fade" id="${projectId}" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="${projectId}label">
      <div class="modal-dialog modal-lg" role="document">
      </div>
    </div>
    <div class="project-info animate">
      <h4 class="project-h4">Project description</h4>
      <p class="project-p">
        ${projectDescription}
      </p>
    </div>
    <div class="timeline-circle">
      <span class="circle animate-circle"></span>
      <span class="line1 animate-line1"></span>
      <span class="line2 animate-line2"></span>
      <span class="line3 animate-line3"></span>
      <span class="line4 animate-line4"></span>
    </div>`
    modalContent = `
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title" id="${projectId}label">${projectName}</h3>
        <img src="${projectImg}" alt="${projectName} big snapshot">
      </div>
      <div class="modal-body">
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <h4 class="modal-title">Project description</h4>
              <p class="modal-p">
                ${projectDescription}
              </p>
            </div>
            <div class="col-xs-6 col-sm-3">
              <h4 class="modal-title">Skills used</h4>
              ${skillsHTML}
            </div>
            <div class="col-xs-6 col-sm-3">
              <h4 class="modal-title">Grade</h4>
              <p class="grade">"${projectGrade}"</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 modal-links">
              <h4 class="modal-title">Links</h4>
              <a href="${projectIoUrl}" target="_blank" class="modal-link">Visit Github .io</a>
              <a href="${projectRepoUrl}" target="_blank" class="modal-link">Visit Github repo</a>
            </div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
    `
    projectsDiv.append(projectsDivHTML);

    let projectBox = $('button[data-target="#' + projectId +'"]');
    let modalDialog = $('button[data-target="#' + projectId +'"]').parent().next();
    projectBox.click(function() {
      modalDialog.append(modalContent);
      let dismissBtn = $('button[data-dismiss="modal"]');
      dismissBtn.click(function() {
        setTimeout(function() {
          modalDialog.html('');
        },500);
      });
    });
    function checkSize() {
      if ($(window).width() >= 768) {
        $('.tile[data-thumb="' + projectThumb + '"]')
        // tile mouse actions
        .on('mouseover', function(){
          $(this).children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
          $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
        })
        .on('mouseout', function(){
          $(this).children('.photo').css({'transform': 'scale(1)'});
        })
        .on('mousemove', function(e){
          $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
        })
        // tiles set up
        .each(function(){
          $(this)
            // add a photo container
            .append('<div class="photo"></div>')
            // some text just to show zoom level on current item in this example
              // set up a background image for each tile based on data-image attribute
            .children('.photo').css({'background-image': 'url('+ $(this).attr('data-thumb') +')'});
        });
      } else {
        $('.tile[data-thumb="' + projectThumb + '"]').each(function(){
          $(this)
            // add a photo container
            .append('<div class="photo"></div>')
            // some text just to show zoom level on current item in this example
              // set up a background image for each tile based on data-image attribute
            .children('.photo').css({'background-image': 'url('+ $(this).attr('data-thumb') +')'});
        });
      }
    }
    $(window).resize(checkSize());
  });

  addAnimation('.project-info', 'animation-in-bottom3');
  addAnimation('.project', 'animation-in-left' );
  addAnimation('.circle', 'circle-scale-in');
  addAnimation('.line1', 'line1-drawing');
  addAnimation('.line2', 'line2-drawing');
  addAnimation('.line3', 'line3-drawing');
  addAnimation('.line4', 'line4-drawing');
}
