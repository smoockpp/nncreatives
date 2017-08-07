// 'use strict';
const logo = document.querySelector('.img-logo');
const menuInput = document.getElementById('menu');
function mediaChecks() {
    if (mediaMd.matches) {
        console.log(true);
        logo.src = 'data/images/logo-md.png';
    }
}
mediaChecks();
window.onresize = () => {
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

        $('.navbar-logo img').css({'height': '60px'});
        setTimeout(function() {
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
       $('.navbar-logo img').css({'height': '80px'});
    }
}

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top + 100 < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
}


document.addEventListener('DOMContentLoaded', function(e) {
    let nav = $('#navbar');
    document.querySelector('button[data-toggle="collapse"]').addEventListener('click', function() {
    // Fix to develope "X" when menu is opened
    const event = new Event('change');
    if (menuInput.checked === false) {
        menuInput.setAttribute('checked', 'checked');
        logoCheck(true);
    } else {
        menuInput.removeAttribute('checked');
        logoCheck(false);
    }

    let bar1 = $('.icon-bar:nth-child(2)');
    let bar2 = $('.icon-bar:nth-child(3)');
    let bar3 = $('.icon-bar:nth-child(4)');
    if ( this.classList.contains('collapse')) {
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
        bar2.css({'opacity': '1'});
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
        bar2.css({'opacity': '0'});
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
