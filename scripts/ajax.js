'use strict';

let data;

const xhrRequest = (callback, url) => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE ) {
           if (xhr.status == 200) {
             data = JSON.parse(xhr.responseText);
             callback(data);
           }
           else if (xhr.status == 400) {
              console.log('There was an error 400');
           }
           else {
               console.log('something else other than 200 was returned');
           }
        }
    };
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
};




const displayTreehouse = (data) => {
  var badgesDiv = document.getElementsByClassName('json-data');
  var activePage = $('ul.pagination li.active a').attr('data-target');
  var pages = $('ul.pagination li a');

  function pagesCase(el) {
    let prev = $('ul.pagination li a[aria-label="Previous"]');
    let next = $('ul.pagination li a[aria-label="Next"]');
    switch (el) {
      case '1':
        createBadges(1, 4);
        prev.parent().addClass('disabled');

        break;
      case '2':
        createBadges(5, 8);
        console.log('badges 6 10');
        prev.parent().removeClass('disabled');
        next.parent().removeClass('disabled');

        break;
      case '3':
        createBadges(9, 12);
        next.parent().addClass('disabled');

        break;

      default:
        createBadges(1, 4);
        prev.parent().addClass('disabled');

    }
  }

  pages.each(function(x) {
    $(this).click(function() {
      let el = $('ul.pagination li.active a');
      let current = parseInt(el.attr('data-target'));
      if ($(this).attr('aria-label') == 'Previous') {
        if (current === 1) {
          el.parent().removeClass('active');
          el.parent().addClass('active');
          $(this).parent().addClass('disabled');
          pagesCase('1');
        } else if (current === 2) {
          el.parent().removeClass('active');
          el.parent().prev().addClass('active');
          pagesCase('1');
        } else if (current == 3) {
          el.parent().removeClass('active');
          el.parent().prev().addClass('active');
          pagesCase('2');
        }
      } else if ($(this).attr('aria-label') == 'Next') {
        if (current === 3) {
          el.parent().removeClass('active');
          el.parent().addClass('active');
          pagesCase('3')
        } else if (current === 2) {
          el.parent().removeClass('active');
          el.parent().next().addClass('active');
          pagesCase('3')
        } else if (current === 1) {
          el.parent().removeClass('active');
          el.parent().next().addClass('active');
          pagesCase('2');
        }
      } else {
        pages.each(function(y) {
          $(this).parent().removeClass('active');
        });
        $(this).parent().addClass('active');
        activePage = $('ul.pagination li.active a').attr('data-target');
        pagesCase(activePage);
      }

    });

  });

  pagesCase(activePage);


  function createBadges(from, to) {
    let badges = [];
    for (let i = from; i <= to; i++ ) {
      badges.push(data.badges[Object.keys(data.badges)[Object.keys(data.badges).length - i]]);
    }
    var badgesHTML = ``;
    for (const key in badges) {
      badgesHTML += `
        <tr class="col-xs-12 col-sm-6 col-md-3 animate" data-target="${badges[key].url}">
          <td><img src="${badges[key].icon_url}" class="badge-icon"></td>
          <td>${badges[key].courses[1].title}</td>
          <td>${badges[key].earned_date.substring(0, 10)}</td>
          <td>${badges[key].courses[0].title}</td>
        </tr>
        `;
    }
    $(badgesDiv).html(badgesHTML);
    let tableRow = $('tbody tr');
    tableRow.click(function() {
      let courseLink = $(this).attr('data-target');
      let win = window.open(courseLink, '_blank');
      if (win) {
          //Browser has allowed it to be opened
          win.focus();
      } else {
          //Browser has blocked it
          alert('Please allow popups for this website');
      }
    });


    $.each($('tr.animate'), function(x, y) {
      let el = $(this);
      if ($(window).width() >= 1024 ) {
        el.viewportChecker({
          classToAdd: 'animation-in-bottom' + parseInt(x)
        });
      } else {
        el.viewportChecker({
          classToAdd: 'animation-in-bottom0'
        });
      }
    });
  }
};


const displayGithub = (data) => {
  let profile = [];
  profile.push(data);
  console.log(profile);
  const avatar = profile[0].avatar_url;
  const name = profile[0].name;
  const location = profile[0].location;
  const alias = profile[0].login;



  console.log(avatar);
  const avatarDiv = $('#github .container');

  let githubAvatar = ``;
  githubAvatar += `
  <div class="row">
    <div class="github-avatar col-xs-12 col-sm-5 col-sm-offset-1">
      <img class="img" src="${avatar}" alt="${name} avatar photo">

    </div>
    <div class="github-repos col-xs-12 col-sm-5">
    <h4 class="heading">${name}</h4>
    <h5 class="heading">${location}</h5>

    <button type="button" class="btn btn-primary btn-sm">My repos</button>
    <button type="button" class="btn btn-primary btn-sm">Hire me</button>
    </div>
  </div>
  `;
  $(avatarDiv).append(githubAvatar);
  const profileImage = $('.github-avatar img');

  profileImage.click(function() {
    $(this).draggabale
  });

}


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
        <div class="tile" data-scale="3" data-image="${projectThumb}"></div>

      </div>
      <div class="skills-cont">
        <h5 class="heading">Skills used</h5>
        ${skillsHTML}
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
        $('.tile[data-image="' + projectThumb + '"]')
        // tile mouse actions
        .mouseenter(function(){
          $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
        })
        .mouseleave(function(){
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
            .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
        });
      } else {
        $('.tile[data-image="' + projectThumb + '"]').each(function(){
          $(this)
            // add a photo container
            .append('<div class="photo"></div>')
            // some text just to show zoom level on current item in this example
              // set up a background image for each tile based on data-image attribute
            .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
        });
      }
    }
    $(window).resize(checkSize());
  });

  $.each($('.project-info'), function(x, y) {
    let el = $(this);
      el.viewportChecker({
        classToAdd: 'animation-in-bottom3'
      });
  });
  $.each($('.project'), function(x, y) {
    let el = $(this);
      el.viewportChecker({
        classToAdd: 'animation-in-left'
      });
  });
  $.each($('.circle'), function(x, y) {
    let el = $(this);
      el.viewportChecker({
        classToAdd: 'circle-scale-in'
      });
  });

  $.each($('.line1'), function(x, y) {
    let el = $(this);
      el.viewportChecker({
        classToAdd: 'line1-drawing'
      });
  });
  $.each($('.line2'), function(x, y) {
    let el = $(this);
      el.viewportChecker({
        classToAdd: 'line2-drawing',
        offset: 20
      });
  });
  $.each($('.line3'), function(x, y) {
    let el = $(this);
      el.viewportChecker({
        classToAdd: 'line3-drawing'
      });
  });
  $.each($('.line4'), function(x, y) {
    let el = $(this);
      el.viewportChecker({
        classToAdd: 'line4-drawing',
        offset: 20
      });
  });


}
