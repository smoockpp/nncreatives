'use strict';

const displayTreehouse = (data) => {
  var badgesDiv = document.getElementsByClassName('json-data');
  var activePage = $('ul.pagination li.active a').attr('data-target');
  var pages = $('ul.pagination li a');

  // Cases for different parameters from pages
  function pagesCase(el) {
    let prev = $('ul.pagination li a[aria-label="Previous"]');
    let next = $('ul.pagination li a[aria-label="Next"]');
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
  pages.each(function(x) {
    $(this).click(function() {
      let el = $('ul.pagination li.active a');
      let current = parseInt(el.attr('data-target'));

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
          pagesCase('3')
        } else if (current === 2) {
          el.parent().removeClass('active');
          el.parent().next().addClass('active');
          pagesCase('3')
        } else if (current === 1) {
          el.parent().removeClass('active');
          el.parent().next().addClass('active');
          pagesCase('2');
        }
      } else {
        pages.each(function(y) {
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
    let badges = [];
    for (let i = from; i <= to; i++ ) {
      badges.push(data.badges[Object.keys(data.badges)[Object.keys(data.badges).length - i]]);
    }
    var badgesHTML = ``;
    for (const key in badges) {
      badgesHTML += `
        <tr class="col-xs-12 col-sm-6 col-md-3 animate" data-target="${badges[key].url}">
          <td><img src="${badges[key].icon_url}" class="badge-icon"></td>
          <td>${badges[key].courses[1].title}</td>
          <td>${badges[key].earned_date.substring(0, 10)}</td>
          <td>${badges[key].courses[0].title}</td>
        </tr>
        `;
    }
    $(badgesDiv).html(badgesHTML);
    let tableRow = $('tbody tr');
    tableRow.click(function() {
      let courseLink = $(this).attr('data-target');
      let win = window.open(courseLink, '_blank');
      if (win) {
          //Browser has allowed it to be opened
          win.focus();
      } else {
          //Browser has blocked it
          alert('Please allow popups for this website');
      }
    });


    $.each($('tr.animate'), function(x, y) {
      let el = $(this);
      if ($(window).width() >= 1024 ) {
        addAnimation(el, 'animation-in-bottom' + parseInt(x) );
      } else {
        addAnimation(el, 'animation-in-bottom0');
      }
    });
  }
};
