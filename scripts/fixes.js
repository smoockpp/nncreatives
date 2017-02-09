'use strict';

// Fix logo and collapse button colors when nav not sticky
let nav = $('#navbar');
let logo = $('.navbar-brand');

$('.navbar-toggle').click(function() {
  if (!nav.hasClass('in')) {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
});



const paginationLinks = $('ul.pagination li a');

paginationLinks.click(function(e) {
  e.preventDefault();
});


function checkSize(){
    if ($(window).width() >= 480) {
      $('.project').removeClass('col-xs-12');
      $('.project').addClass('col-xs-6');
      $('.json-data tr').removeClass('col-xs-12');
      $('.json-data tr').addClass('col-xs-6');
    } else {
      $('.project').removeClass('col-xs-6');
      $('.project').addClass('col-xs-12');
      $('.json-data tr').removeClass('col-xs-6');
      $('.json-data tr').addClass('col-xs-12');
    }
}

//Function to the css rule
