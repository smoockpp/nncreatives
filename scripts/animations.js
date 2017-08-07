function addAnimation(target, animation) {
  $.each($(target), function(x, y) {
    let el = $(this);
      el.viewportChecker({
        classToAdd: animation
      });
  });
}

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
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
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 20) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}



function animateCounter() {
    const target = 1759;
    let counterPlaceholder = document.querySelector('.counter-number');
    // const counter = document.getElementById('counter-placeholder');
    counterPlaceholder.classList.add('animate-counter')
    let number = parseInt(counterPlaceholder.innerText);
    var interval = setInterval(function() {
            counterPlaceholder.innerText = number;
            if (number >= target) clearInterval(interval)
            if (number < 1150) {
                number += 25;
                number++;
            } else {
                number += 10;
                number++;
            }

    }, 10);
}


const londonMapSVG = document.getElementById('london');
const cityOfLondon = londonMapSVG.getElementById('City_of_London');
const districts = londonMapSVG.querySelectorAll('path[data-toggle="tooltip"]');
const cityOfLondonColor = cityOfLondon.style.fill;

var i;
var l = districts.length;
for(i = 0; i < l; i++) {
    fillAnimation(districts[i]);
}

function fillAnimation(el) {

    const driverProfile = document.createElement('div');
    driverProfile.classList.add('media');
    driverProfile.innerHTML = `
        <div class="media-left">
            <a href="#">
              <img class="img-circle  media-object" src="data/images/team/dean-vasilev.jpg" alt="...">
            </a>
            </div>
            <div class="media-body">
            <h4 class="heading">${el.id.replace(/_/g, ' ',)}</h4>
            <h5 class"sub-haeding">Dean Vasilev</h5>
            <p class="paragraph">Fedex delivery driver</p>
        </div>`;
    const tooltip = document.createElement('span');
    tooltip.classList.add('nn-tooltip');
    tooltip.appendChild(driverProfile);
    el.addEventListener('mouseover', function(e) {
        this.addEventListener('mousemove', function(e) {
            let tooltipWidth = tooltip.getBoundingClientRect().width;
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
    el.addEventListener('mouseout', function(e) {
        if (e.relatedTarget.classList.contains('nn-tooltip')) {
            e.relatedTarget.addEventListener('mouseout', function(e) {
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
    const yygLogo = document.getElementById('yyg-logo');
    const yygGlobe = yygLogo.getElementById('globe');
    const yygGlobal = yygLogo.getElementById('global');
    const yygText = yygLogo.getElementById('yyg-text');
    const yygNavLogo = document.querySelector('.navbar-logo');
    document.addEventListener('scroll', function(e) {
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
