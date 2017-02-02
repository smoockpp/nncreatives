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
function checkSize(){
    if ($(".icon-wrapper").css("float") == "none" ){
      $('.github-avatar').removeClass('col-xs-4 col-xs-offset-1');
      $('.github-avatar').addClass('col-xs-12');
      $('.github-repos').removeClass('col-xs-4 col-xs-offset-1');
      $('.github-repos').addClass('col-xs-12');
    } else if ($(".icon-wrapper").css("float") == "left" ) {
      $('.github-avatar').removeClass('col-xs-12');
      $('.github-avatar').addClass('col-xs-4 col-xs-offset-1');
      $('.github-repos').removeClass('col-xs-12');
      $('.github-repos').addClass('col-xs-4 col-xs-offset-1');
    }
}
