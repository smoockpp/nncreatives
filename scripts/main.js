$(function() {
  let loc = $(location).attr('pathname');
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
  }

  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 5000
    });

      // run test on initial page load
      checkSize();

      $(window).resize(checkSize);
  });


  // run test on resize of the window

});
