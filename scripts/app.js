'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CarouselTemplate = function () {
  function CarouselTemplate(id, classes, perSlide, images) {
    _classCallCheck(this, CarouselTemplate);

    this.id = id;
    this.classes = classes;
    this.perSlide = perSlide;
    this.images = images;
  }

  _createClass(CarouselTemplate, [{
    key: 'init',
    value: function init() {
      var images = this.images;
      var slide = this.perSlide;
      function createInner(el) {

        var i = void 0;
        var counter = 0;
        var l = images.length / slide;
        function indicatorsTemplate(el) {
          var thisTemplate = '';
          for (var _i = 0; _i < Math.ceil(l); _i++) {
            if (_i === 0) {
              thisTemplate += '<li data-target="#' + el + '" data-slide-to="' + _i + '" class="active"></li>';
            } else {
              thisTemplate += '<li data-target="#' + el + '" data-slide-to="' + _i + '"></li>';
            }
          }
          return thisTemplate;
        }
        var thisHTML = '\n                <ol class="carousel-indicators">\n                    ' + indicatorsTemplate(el) + '\n                </ol>';
        thisHTML += '<div class="carousel-inner" role="listbox">';
        for (i = 0; i < l; i++) {
          thisHTML += '\n                  <div class="item ' + (counter === 0 ? 'active' : ' ') + ' ">\n                ';
          var x = void 0;
          for (x = 0; x < slide; x++) {
            thisHTML += '<img class="img-responsive  by-width" src="' + images[counter].url + '" alt="' + images[counter].alt + '">';
            if (x % slide === 0 && x != 0) {
              x = 0;
            }
            counter++;
          }
          thisHTML += '</div>';
        }
        thisHTML += '</div>';
        return thisHTML;
      }
      return '\n            <div id="' + this.id + '" class="carousel slide ' + this.classes + '" data-ride="carousel">\n                <!-- Wrapper for slides -->\n                ' + createInner(this.id) + '\n            </div>\n        ';
    }
  }]);

  return CarouselTemplate;
}();

// Global variables


var mediaLandscape = window.matchMedia('(orientation: landscape)');
var mediaSm = window.matchMedia('(min-width: 320px)');
var mediaMd = window.matchMedia('(min-width: 768px)');
var mediaLg = window.matchMedia('(min-width: 1200px)');

/**
 * jQuery-viewport-checker - v1.8.7 - 2015-12-17
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2015 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function (a) {
  a.fn.viewportChecker = function (b) {
    var c = { classToAdd: "visible", classToRemove: "invisible", classToAddForFullView: "full-visible", removeClassAfterAnimation: !1, offset: 100, repeat: !1, invertBottomOffset: !0, callbackFunction: function callbackFunction(a, b) {}, scrollHorizontal: !1, scrollBox: window };a.extend(c, b);var d = this,
        e = { height: a(c.scrollBox).height(), width: a(c.scrollBox).width() },
        f = -1 != navigator.userAgent.toLowerCase().indexOf("webkit") || -1 != navigator.userAgent.toLowerCase().indexOf("windows phone") ? "body" : "html";return this.checkElements = function () {
      var b, g;c.scrollHorizontal ? (b = a(f).scrollLeft(), g = b + e.width) : (b = a(f).scrollTop(), g = b + e.height), d.each(function () {
        var d = a(this),
            f = {},
            h = {};if (d.data("vp-add-class") && (h.classToAdd = d.data("vp-add-class")), d.data("vp-remove-class") && (h.classToRemove = d.data("vp-remove-class")), d.data("vp-add-class-full-view") && (h.classToAddForFullView = d.data("vp-add-class-full-view")), d.data("vp-keep-add-class") && (h.removeClassAfterAnimation = d.data("vp-remove-after-animation")), d.data("vp-offset") && (h.offset = d.data("vp-offset")), d.data("vp-repeat") && (h.repeat = d.data("vp-repeat")), d.data("vp-scrollHorizontal") && (h.scrollHorizontal = d.data("vp-scrollHorizontal")), d.data("vp-invertBottomOffset") && (h.scrollHorizontal = d.data("vp-invertBottomOffset")), a.extend(f, c), a.extend(f, h), !d.data("vp-animated") || f.repeat) {
          String(f.offset).indexOf("%") > 0 && (f.offset = parseInt(f.offset) / 100 * e.height);var i = f.scrollHorizontal ? d.offset().left : d.offset().top,
              j = f.scrollHorizontal ? i + d.width() : i + d.height(),
              k = Math.round(i) + f.offset,
              l = f.scrollHorizontal ? k + d.width() : k + d.height();f.invertBottomOffset && (l -= 2 * f.offset), g > k && l > b ? (d.removeClass(f.classToRemove), d.addClass(f.classToAdd), f.callbackFunction(d, "add"), g >= j && i >= b ? d.addClass(f.classToAddForFullView) : d.removeClass(f.classToAddForFullView), d.data("vp-animated", !0), f.removeClassAfterAnimation && d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            d.removeClass(f.classToAdd);
          })) : d.hasClass(f.classToAdd) && f.repeat && (d.removeClass(f.classToAdd + " " + f.classToAddForFullView), f.callbackFunction(d, "remove"), d.data("vp-animated", !1));
        }
      });
    }, ("ontouchstart" in window || "onmsgesturechange" in window) && a(document).bind("touchmove MSPointerMove pointermove", this.checkElements), a(c.scrollBox).bind("load scroll", this.checkElements), a(window).resize(function (b) {
      e = { height: a(c.scrollBox).height(), width: a(c.scrollBox).width() }, d.checkElements();
    }), this.checkElements(), this;
  };
}(jQuery);
//# sourceMappingURL=jquery.viewportchecker.min.js.map

function addAnimation(target, animation) {
  $.each($(target), function (x, y) {
    var el = $(this);
    el.viewportChecker({
      classToAdd: animation
    });
  });
}

function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }return y;
}

function smoothScroll(eID) {
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 20) {
    scrollTo(0, stopY);return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;if (leapY > stopY) leapY = stopY;timer++;
    }return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;if (leapY < stopY) leapY = stopY;timer++;
  }
}

function animateCounter() {
  var target = 1759;
  var counterPlaceholder = document.querySelector('.counter-number');
  // const counter = document.getElementById('counter-placeholder');
  counterPlaceholder.classList.add('animate-counter');
  var number = parseInt(counterPlaceholder.innerText);
  var interval = setInterval(function () {
    counterPlaceholder.innerText = number;
    if (number >= target) clearInterval(interval);
    if (number < 1150) {
      number += 25;
      number++;
    } else {
      number += 10;
      number++;
    }
  }, 10);
}

var londonMapSVG = document.getElementById('london');
var cityOfLondon = londonMapSVG.getElementById('City_of_London');
var districts = londonMapSVG.querySelectorAll('path[data-toggle="tooltip"]');
var cityOfLondonColor = cityOfLondon.style.fill;

var i;
var l = districts.length;
for (i = 0; i < l; i++) {
  fillAnimation(districts[i]);
}

function fillAnimation(el) {

  var driverProfile = document.createElement('div');
  driverProfile.classList.add('media');
  driverProfile.innerHTML = '\n        <div class="media-left">\n            <a href="#">\n              <img class="img-circle  media-object" src="data/images/team/dean-vasilev.jpg" alt="...">\n            </a>\n            </div>\n            <div class="media-body">\n            <h4 class="heading">' + el.id.replace(/_/g, ' ') + '</h4>\n            <h5 class"sub-haeding">Dean Vasilev</h5>\n            <p class="paragraph">Fedex delivery driver</p>\n        </div>';
  var tooltip = document.createElement('span');
  tooltip.classList.add('nn-tooltip');
  tooltip.appendChild(driverProfile);
  el.addEventListener('mouseover', function (e) {
    this.addEventListener('mousemove', function (e) {
      var tooltipWidth = tooltip.getBoundingClientRect().width;
      tooltip.style.left = e.pageX + 20 + 'px';
      tooltip.style.top = e.pageY + 20 + 'px';
      if (tooltipWidth > window.innerWidth - e.pageX) {
        if (tooltipWidth > e.pageX) {
          tooltip.style.transform = 'translateX(-50%)';
        } else {
          tooltip.style.transform = 'translateX(-100%)';
        }
      }
      e.stopPropagation();
    }, false);
    el.style.fill = '#e7ad47';
    document.body.appendChild(tooltip);
    e.stopPropagation();
  }, false);
  el.addEventListener('mouseout', function (e) {
    if (e.relatedTarget.classList.contains('nn-tooltip')) {
      e.relatedTarget.addEventListener('mouseout', function (e) {
        if (e.relatedTarget.id != el.id) {
          el.style.fill = cityOfLondonColor;
          tooltip.remove();
        }
      }, false);
      e.stopPropagation();
    } else {
      el.style.fill = cityOfLondonColor;
      tooltip.remove();
    }
    e.stopPropagation();
  }, false);
}
// fillAnimation(cityOfLondon);

function animateLogo() {
  var yygLogo = document.getElementById('yyg-logo');
  var yygGlobe = yygLogo.getElementById('globe');
  var yygGlobal = yygLogo.getElementById('global');
  var yygText = yygLogo.getElementById('yyg-text');
  var yygNavLogo = document.querySelector('.navbar-logo');
  document.addEventListener('scroll', function (e) {
    if (yygLogo.getBoundingClientRect().bottom <= 0) {
      yygNavLogo.style.display = 'inline-block';
    } else {
      if (matchMedia('(max-width: 991px)').matches) {
        yygNavLogo.style.display = 'inline-block';
      }
    }
    e.stopPropagation();
  }, false);
}

animateLogo();

'use strict';

var xhrRequest = function xhrRequest(callback, url) {

  var xhr = new XMLHttpRequest();
  var data = void 0;
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        data = JSON.parse(xhr.responseText);
        callback(data);
      } else if (xhr.status == 400) {
        console.log('There was an error 400');
      } else {
        console.log('something else other than 200 was returned');
      }
    }
  };
  xhr.open("GET", url, true);

  xhr.send();
};

'use strict';

var displayTreehouse = function displayTreehouse(data) {
  var badgesDiv = document.getElementsByClassName('json-data');
  var activePage = $('ul.pagination li.active a').attr('data-target');
  var pages = $('ul.pagination li a');

  // Cases for different parameters from pages
  function pagesCase(el) {
    var prev = $('ul.pagination li a[aria-label="Previous"]');
    var next = $('ul.pagination li a[aria-label="Next"]');
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

  // Function with listener for click for each page number
  pages.each(function (x) {
    $(this).click(function () {
      var el = $('ul.pagination li.active a');
      var current = parseInt(el.attr('data-target'));

      // Check conditions of the clicked element so can show proper content
      if ($(this).attr('aria-label') == 'Previous') {
        if (current === 1) {
          // changing state of pagination buttons
          el.parent().removeClass('active');
          el.parent().addClass('active');
          $(this).parent().addClass('disabled');
          // send the case to pagesCase function
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
          pagesCase('3');
        } else if (current === 2) {
          el.parent().removeClass('active');
          el.parent().next().addClass('active');
          pagesCase('3');
        } else if (current === 1) {
          el.parent().removeClass('active');
          el.parent().next().addClass('active');
          pagesCase('2');
        }
      } else {
        pages.each(function (y) {
          $(this).parent().removeClass('active');
        });
        $(this).parent().addClass('active');
        activePage = $('ul.pagination li.active a').attr('data-target');
        pagesCase(activePage);
      }
    });
  });

  pagesCase(activePage);

  // Function with a template for each TR containing badges info
  function createBadges(from, to) {
    var badges = [];
    for (var _i2 = from; _i2 <= to; _i2++) {
      badges.push(data.badges[Object.keys(data.badges)[Object.keys(data.badges).length - _i2]]);
    }
    var badgesHTML = '';
    for (var key in badges) {
      badgesHTML += '\n        <tr class=" animate" data-target="' + badges[key].url + '">\n          <td><img src="' + badges[key].icon_url + '" class="badge-icon"></td>\n          <td>' + badges[key].courses[1].title + '</td>\n          <td>' + badges[key].earned_date.substring(0, 10) + '</td>\n          <td>' + badges[key].courses[0].title + '</td>\n        </tr>\n        ';
    }
    $(badgesDiv).html(badgesHTML);
    var tableRow = $('tbody tr');
    tableRow.click(function () {
      var courseLink = $(this).attr('data-target');
      var win = window.open(courseLink, '_blank');
      if (win) {
        //Browser has allowed it to be opened
        win.focus();
      } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
      }
    });

    $.each($('tr.animate'), function (x, y) {
      var el = $(this);
      if ($(window).width() >= 1024) {
        addAnimation(el, 'animation-in-bottom' + parseInt(x));
      } else {
        addAnimation(el, 'animation-in-bottom0');
      }
    });
  }
};

'use strict';

var displayProjects = function displayProjects(data) {
  var projects = [];
  var projectsDiv = $('#projects-flex');

  $.each(data, function (x, y) {
    var projectsDivHTML = '';
    var modalContent = '';
    var projectId = data[x].id;
    var projectName = data[x].name;
    var projectThumb = data[x].thumb_url;
    var projectImg = data[x].img_url;
    var projectDescription = data[x].description;
    var skills = [];
    var skillsHTML = '';
    $.each(data[x].skills, function (a, b) {
      var skill = data[x].skills[a];
      skillsHTML += '<p class="' + skill + '">' + skill + '</p>';
    });
    var projectGrade = data[x].grade;
    var projectIoUrl = data[x].github_io_url;
    var projectRepoUrl = data[x].github_repo_url;
    projectsDivHTML = '\n    <div class="project" >\n      <h4 class="project-h4">' + projectName + '</h4>\n      <div class="image-zoom-pan">\n        <div class="tile" data-scale="3" data-thumb="' + projectThumb + '" data-image="' + projectImg + '">\n        </div>\n      </div>\n      <div class="skills-cont">\n        <h5 class="heading">Skills used</h5>\n        ' + skillsHTML + '\n      </div>\n      <div class="project-links">\n        <a href="' + projectIoUrl + '" target="_blank" class="project-link btn btn-default btn-lg">Visit Page</a>\n        <a href="' + projectRepoUrl + '" target="_blank" class="project-link btn btn-default btn-lg">Visit Repo</a>\n      </div>\n      <button class="btn btn-default btn-lg" data-toggle="modal"  data-target="#' + projectId + '">Read more</button>\n    </div>\n    <div class="modal fade" id="' + projectId + '" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="' + projectId + 'label">\n      <div class="modal-dialog modal-lg" role="document">\n      </div>\n    </div>\n    <div class="project-info animate">\n      <h4 class="project-h4">Project description</h4>\n      <p class="project-p">\n        ' + projectDescription + '\n      </p>\n    </div>\n    <div class="timeline-circle">\n      <span class="circle animate-circle"></span>\n      <span class="line1 animate-line1"></span>\n      <span class="line2 animate-line2"></span>\n      <span class="line3 animate-line3"></span>\n      <span class="line4 animate-line4"></span>\n    </div>';
    modalContent = '\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n        <h3 class="modal-title" id="' + projectId + 'label">' + projectName + '</h3>\n        <img src="' + projectImg + '" alt="' + projectName + ' big snapshot">\n      </div>\n      <div class="modal-body">\n          <div class="row">\n            <div class="col-xs-12 col-sm-6">\n              <h4 class="modal-title">Project description</h4>\n              <p class="modal-p">\n                ' + projectDescription + '\n              </p>\n            </div>\n            <div class="col-xs-6 col-sm-3">\n              <h4 class="modal-title">Skills used</h4>\n              ' + skillsHTML + '\n            </div>\n            <div class="col-xs-6 col-sm-3">\n              <h4 class="modal-title">Grade</h4>\n              <p class="grade">"' + projectGrade + '"</p>\n            </div>\n            <div class="col-xs-12 col-sm-6 col-md-3 modal-links">\n              <h4 class="modal-title">Links</h4>\n              <a href="' + projectIoUrl + '" target="_blank" class="modal-link">Visit Github .io</a>\n              <a href="' + projectRepoUrl + '" target="_blank" class="modal-link">Visit Github repo</a>\n            </div>\n          </div>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n    ';
    projectsDiv.append(projectsDivHTML);

    var projectBox = $('button[data-target="#' + projectId + '"]');
    var modalDialog = $('button[data-target="#' + projectId + '"]').parent().next();
    projectBox.click(function () {
      modalDialog.append(modalContent);
      var dismissBtn = $('button[data-dismiss="modal"]');
      dismissBtn.click(function () {
        setTimeout(function () {
          modalDialog.html('');
        }, 500);
      });
    });
    function checkSize() {
      if ($(window).width() >= 768) {
        $('.tile[data-thumb="' + projectThumb + '"]')
        // tile mouse actions
        .on('mouseover', function () {
          $(this).children('.photo').css({ 'background-image': 'url(' + $(this).attr('data-image') + ')' });
          $(this).children('.photo').css({ 'transform': 'scale(' + $(this).attr('data-scale') + ')' });
        }).on('mouseout', function () {
          $(this).children('.photo').css({ 'transform': 'scale(1)' });
        }).on('mousemove', function (e) {
          $(this).children('.photo').css({ 'transform-origin': (e.pageX - $(this).offset().left) / $(this).width() * 100 + '% ' + (e.pageY - $(this).offset().top) / $(this).height() * 100 + '%' });
        })
        // tiles set up
        .each(function () {
          $(this)
          // add a photo container
          .append('<div class="photo"></div>')
          // some text just to show zoom level on current item in this example
          // set up a background image for each tile based on data-image attribute
          .children('.photo').css({ 'background-image': 'url(' + $(this).attr('data-thumb') + ')' });
        });
      } else {
        $('.tile[data-thumb="' + projectThumb + '"]').each(function () {
          $(this)
          // add a photo container
          .append('<div class="photo"></div>')
          // some text just to show zoom level on current item in this example
          // set up a background image for each tile based on data-image attribute
          .children('.photo').css({ 'background-image': 'url(' + $(this).attr('data-thumb') + ')' });
        });
      }
    }
    $(window).resize(checkSize());
  });

  addAnimation('.project-info', 'animation-in-bottom3');
  addAnimation('.project', 'animation-in-left');
  addAnimation('.circle', 'circle-scale-in');
  addAnimation('.line1', 'line1-drawing');
  addAnimation('.line2', 'line2-drawing');
  addAnimation('.line3', 'line3-drawing');
  addAnimation('.line4', 'line4-drawing');
};

// 'use strict';
var logo = document.querySelector('.img-logo');
var menuInput = document.getElementById('menu');
function mediaChecks() {
  if (mediaMd.matches) {
    console.log(true);
    logo.src = 'data/images/logo-md.png';
  }
}
mediaChecks();
window.onresize = function () {
  mediaChecks();
  if (menuInput.checked === false) {
    logoCheck(false);
  } else {
    logoCheck(true);
  }
};

function logoCheck(bool) {
  if (!mediaLandscape.matches && bool === true) {
    logo.style.top = '70%';
    logo.style.left = '30%';
  } else {
    logo.style.top = '50%';
    logo.style.left = '50%';
  }
}

function stickyCheck(e) {
  // console.log(e.target.querySelector('#our-services').getBoundingClientRect().top);
  if (e.target.querySelector('#our-services').getBoundingClientRect().top <= 100) {
    $('.navbar').addClass("sticky ");
    if (matchMedia('(min-width: 991px)').matches) {
      $('.navbar-logo').css({
        'top': '0',
        'opacity': '1'
      });
    }

    $('.navbar-logo img').css({ 'height': '60px' });
    setTimeout(function () {
      $('.sticky').addClass('sticky-color');
    }, 300);
  } else {
    $('.sticky-color').css('background-color', 'transparent');
    $('.sticky').removeClass('sticky-color');
    $('.navbar').removeClass("sticky");
    if (matchMedia('(max-width: 991px)').matches) {
      $('.navbar-logo').css({
        'top': '10px',
        'opacity': '0',
        'z-index': '1'
      });
    }
    $('.navbar-logo img').css({ 'height': '80px' });
  }
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return top + 100 < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
}

document.addEventListener('DOMContentLoaded', function (e) {
  var nav = $('#navbar');
  document.querySelector('button[data-toggle="collapse"]').addEventListener('click', function () {
    // Fix to develope "X" when menu is opened
    var event = new Event('change');
    if (menuInput.checked === false) {
      menuInput.setAttribute('checked', 'checked');
      logoCheck(true);
    } else {
      menuInput.removeAttribute('checked');
      logoCheck(false);
    }

    var bar1 = $('.icon-bar:nth-child(2)');
    var bar2 = $('.icon-bar:nth-child(3)');
    var bar3 = $('.icon-bar:nth-child(4)');
    if (this.classList.contains('collapse')) {
      this.classList.remove('collapse');
      this.classList.add('collapsed');
    } else {
      this.classList.add('collapse');
      this.classList.remove('collapsed');
    }
    if ($('button[data-toggle="collapse"]').hasClass('collapsed')) {
      bar1.css({
        'transform': 'rotate(0deg)',
        'transform-origin': 'center left',
        'bottom': '0',
        'left': '0'
      });
      bar2.css({ 'opacity': '1' });
      bar3.css({
        'transform': 'rotate(0deg)',
        'transform-origin': 'center left',
        'top': '0',
        'left': '0'
      });
    } else {
      bar1.css({
        'transform': 'rotate(45deg)',
        'transform-origin': 'center left',
        'bottom': '1px',
        'left': '4px'
      });
      bar2.css({ 'opacity': '0' });
      bar3.css({
        'transform': 'rotate(-45deg)',
        'transform-origin': 'center left',
        'top': '0',
        'left': '4px'
      });
    }
  });
  e.stopPropagation();
});

var paginationLinks = $('ul.pagination li a');

paginationLinks.click(function (e) {
  e.preventDefault();
});

var aboutBoxImage = $('.about-box-image');

function checkImageSize() {
  if ($(window).width() >= 1024) {
    aboutBoxImage.attr('src', 'data/images/about/who-am-i-md.jpg');
  } else if ($(window).width() >= 480) {
    aboutBoxImage.attr('src', 'data/images/about/who-am-i.jpg');
  } else {
    aboutBoxImage.attr('src', 'data/images/about/who-am-i-sm.jpg');
  }
}

//Function to the css rule

'use strict';

var contactAnchor = $('a[href="#contact"]');

function createForm() {
  var contactHTML = '';
  contactHTML += '\n  <div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="contact-modal-label">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title" id="contact-modal-label">Contact me</h4>\n        </div>\n        <div class="modal-body">\n          <form id="contact-form" action="https://formspree.io/nikolay.nikolov@n-nikolov.com"  method="post">\n            <div class="form-group">\n              <label for="visitor-name" class="control-label">Your name:</label>\n              <input type="text" class="form-control" id="visitor-name" name="visitor-name" required>\n            </div>\n            <div class="form-group">\n              <label for="visitor-email" class="control-label">Your email:</label>\n              <input type="email" class="form-control" id="visitor-email" name="visitor-email" required>\n            </div>\n            <div class="form-group">\n              <label for="visitor-phone" class="control-label">Your phone number (optional):</label>\n              <input type="phone" class="form-control" id="visitor-phone" name="visitor-phone">\n            </div>\n            <div class="form-group">\n              <label for="message-text" class="control-label">Message:</label>\n              <textarea class="form-control" id="message-text" rows="10" name="message-text" required></textarea>\n            </div>\n          </form>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>\n          <button type="submit" form="contact-form" class="btn btn-primary">Send message</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  ';
  return contactHTML;
}

contactAnchor.click(function () {
  $('body').append(createForm);
  $('#contact-modal').modal('toggle');
});

var scrollDown = document.getElementById('scroll-down');
var partnersCarousel = document.getElementById('carousel-partners');

scrollDown.addEventListener('click', function (e) {
  smoothScroll('our-services');
  e.stopPropagation();
}, false);
(function () {
  var loc = $(location).attr('pathname');
  console.log(loc);

  switch (loc) {
    case '/':
      xhrRequest(displayTreehouse, 'https://teamtreehouse.com/nikolaynikolov2.json');
      // xhrRequest(displayGithub, 'https://api.github.com/users/smoockpp');
      break;
    case '/index.html':
      xhrRequest(displayTreehouse, 'https://teamtreehouse.com/nikolaynikolov2.json');
      // xhrRequest(displayGithub, 'https://api.github.com/users/smoockpp');
      break;
    case '/nncreatives/':
      xhrRequest(displayTreehouse, 'https://teamtreehouse.com/nikolaynikolov2.json');
      // xhrRequest(displayGithub, 'https://api.github.com/users/smoockpp');
      break;
    case '/nncreatives/index.html':
      xhrRequest(displayTreehouse, 'https://teamtreehouse.com/nikolaynikolov2.json');
      // xhrRequest(displayGithub, 'https://api.github.com/users/smoockpp');
      break;
    case '/portfolio.html':
      xhrRequest(displayProjects, 'data/projects.json');
      break;
    case '/nncreatives/portfolio.html':
      xhrRequest(displayProjects, 'data/projects.json');
      break;
    case '/nncreatives/about.html':
      addAnimation('.about-box', 'animation-in-bottom0');
      break;
    case '/about.html':
      addAnimation('.about-box', 'animation-in-bottom0');
      break;
  }
})();

document.addEventListener('scroll', function (e) {
  stickyCheck(e);
  e.stopPropagation();
}, false);

function carouselLayout() {
  var perSlide = void 0;

  if (matchMedia('(max-width: 768px)').matches) {
    perSlide = 1;
  }
  if (matchMedia('(min-width: 769px)').matches) {
    perSlide = 2;
  }
  if (matchMedia('(min-width: 992px)').matches) {
    perSlide = 3;
  }

  var carousel = new CarouselTemplate('my-carosuel', '', perSlide, [{
    url: 'data/images/partners/apc-logo.png',
    alt: 'APC logo image'
  }, {
    url: 'data/images/partners/dpd-logo.png',
    alt: 'DPD logo image'
  }, {
    url: 'data/images/partners/fedex-logo.png',
    alt: 'Fedex logo image'
  }, {
    url: 'data/images/partners/hermes-logo.png',
    alt: 'Hermes logo image'
  }, {
    url: 'data/images/partners/tnt-logo.png',
    alt: 'TNT logo image'
  }, {
    url: 'data/images/partners/yodel-logo.png',
    alt: 'Yodel logo image'
  }]);
  if (document.querySelector('[data-template="carousel-template"]')) {
    document.querySelector('[data-template="carousel-template"]').innerHTML = carousel.init();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // run test on initial page load
  checkImageSize();
  window.addEventListener('resize', function () {
    checkImageSize;
    carouselLayout();
  }, false);

  carouselLayout();

  $.each($('.header-inner .container').children(), function (x, y) {
    var el = $(this);
    el.viewportChecker({
      classToAdd: 'animation-in-bottom' + parseInt(x)
    });
  });
  $.each($('.icon-wrapper'), function (x, y) {
    var el = $(this);
    if ($(window).width() >= 480) {
      el.viewportChecker({
        classToAdd: 'animation-in-bottom' + parseInt(x)
      });
    } else {
      el.viewportChecker({
        classToAdd: 'animation-in-bottom0'
      });
    }
  });
  // carouselLayout();

});