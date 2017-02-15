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




//Function to the css rule
