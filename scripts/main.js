const scrollDown = document.getElementById('scroll-down');
const partnersCarousel = document.getElementById('carousel-partners');



scrollDown.addEventListener('click', function(e) {
    smoothScroll('our-services');
    e.stopPropagation();
}, false);
(function() {
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
    case '/nncreatives/about.html':
      addAnimation('.about-box', 'animation-in-bottom0');
      break;
    case '/about.html':
      addAnimation('.about-box', 'animation-in-bottom0');
      break;
  }
})();

document.addEventListener('scroll', function(e) {
    stickyCheck(e);
    e.stopPropagation();
}, false);

function carouselLayout() {
    let perSlide;

    if (matchMedia('(max-width: 768px)').matches) {
        perSlide = 1;
    }
    if (matchMedia('(min-width: 769px)').matches) {
        perSlide = 2;
    }
    if (matchMedia('(min-width: 992px)').matches) {
        perSlide = 3;
    }

    const carousel = new CarouselTemplate('my-carosuel', '', perSlide, [
        {
            url: 'data/images/partners/apc-logo.png',
            alt: 'APC logo image'
        },
        {
            url: 'data/images/partners/dpd-logo.png',
            alt: 'DPD logo image'
        },
        {
            url: 'data/images/partners/fedex-logo.png',
            alt: 'Fedex logo image'
        },
        {
            url: 'data/images/partners/hermes-logo.png',
            alt: 'Hermes logo image'
        },
        {
            url: 'data/images/partners/tnt-logo.png',
            alt: 'TNT logo image'
        },
        {
            url: 'data/images/partners/yodel-logo.png',
            alt: 'Yodel logo image'
        }
    ]);
    if (document.querySelector('[data-template="carousel-template"]')) {
        document.querySelector('[data-template="carousel-template"]').innerHTML = carousel.init();
    }
}

document.addEventListener('DOMContentLoaded', function() {
  // run test on initial page load
  checkImageSize();
  window.addEventListener('resize', function() {
      checkImageSize;
      carouselLayout();
  }, false);

  carouselLayout();

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
  // carouselLayout();


});
