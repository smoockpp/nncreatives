$(function() {
  let loc = $(location).attr('pathname');
  console.log(loc);

  switch (loc) {
    case '/':
      xhrRequest(displayTreehouse, 'https://teamtreehouse.com/nikolaynikolov2.json', 'application/json');
      // xhrRequest(displayGithub, 'https://api.github.com/users/smoockpp');
      break;
    case '/index.html':
      xhrRequest(displayTreehouse, 'https://teamtreehouse.com/nikolaynikolov2.json', 'application/json');
      // xhrRequest(displayGithub, 'https://api.github.com/users/smoockpp');
      break;
    case '/nncreatives/':
      xhrRequest(displayTreehouse, 'https://teamtreehouse.com/nikolaynikolov2.json', 'application/json');
      // xhrRequest(displayGithub, 'https://api.github.com/users/smoockpp');
      break;
    case '/nncreatives/index.html':
      xhrRequest(displayTreehouse, 'https://teamtreehouse.com/nikolaynikolov2.json', 'application/json');
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
});



$(document).ready(function() {
  // run test on initial page load
  checkImageSize();
  $(window).resize(checkImageSize);

  $.each($('.header-inner .container').children(), function(x, y) {
    let el = $(this);
    el.viewportChecker({
      classToAdd: 'animation-in-bottom' + parseInt(x)
    });
  })
  $.each($('.icon-wrapper'), function(x, y) {
    let el = $(this);
    if ($(window).width() >= 480 ) {
      el.viewportChecker({
        classToAdd: 'animation-in-bottom' + parseInt(x)
      });
    } else {
      el.viewportChecker({
        classToAdd: 'animation-in-bottom0'
      });
    }
  });




});
