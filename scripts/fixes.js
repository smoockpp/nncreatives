'use strict';

$(document).ready(function() {
  // Fix logo and collapse button colors when nav not sticky
  let nav = $('#navbar');
  let logo = $('.navbar-brand');

  $('button[data-toggle="collapse"]').click(function() {
    // Fix to develope "X" when menu is opened
    let bar1 = $('.icon-bar:nth-child(2)');
    let bar2 = $('.icon-bar:nth-child(3)');
    let bar3 = $('.icon-bar:nth-child(4)');

    if (!nav.hasClass('in')) {
      $('nav').addClass('sticky');
    } else {
      setTimeout(function() {
        $('nav').removeClass('sticky');
      }, 250);

    }
    setTimeout(function() {
      if ($('button[data-toggle="collapse"]').hasClass('collapsed')) {
        bar1.css({
          'transform': 'rotate(0deg)',
          'transform-origin': 'center left',
          'bottom': '0'
        });
        bar2.css({'opacity': '1'});
        bar3.css({
          'transform': 'rotate(0deg)',
          'transform-origin': 'center left',
          'top': '0'
        });
      } else {
        bar1.css({
          'transform': 'rotate(45deg)',
          'transform-origin': 'center left',
          'bottom': '2px'
        });
        bar2.css({'opacity': '0'});
        bar3.css({
          'transform': 'rotate(-45deg)',
          'transform-origin': 'center left',
          'top': '2px'
        });
      }
    },200);
  });
});

const paginationLinks = $('ul.pagination li a');

paginationLinks.click(function(e) {
  e.preventDefault();
});


let aboutBoxImage = $('.about-box-image');

function checkImageSize() {
  if ($(window).width() >= 1024) {
    aboutBoxImage.attr('src', 'data/images/about/who-am-i-md.jpg');
  } else if ( $(window).width() >= 480 )  {
    aboutBoxImage.attr('src', 'data/images/about/who-am-i.jpg');
  } else {
    aboutBoxImage.attr('src', 'data/images/about/who-am-i-sm.jpg');
  }
}

//Function to the css rule
