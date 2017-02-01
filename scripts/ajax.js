let data;

const treehouseRequest = (url) => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE ) {
           if (xhr.status == 200) {
             data = JSON.parse(xhr.responseText);

             console.log(data);
             displayTreehouse(data);
           }
           else if (xhr.status == 400) {
              console.log('There was an error 400');
           }
           else {
               console.log('something else other than 200 was returned');
           }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
};

const github = (url) => {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE ) {
       if (xhr.status == 200) {
         data = xhr.responseText;

         console.log(data);
         displayGithub(data);
       }
       else if (xhr.status == 400) {
          console.log('There was an error 400');
       }
       else {
           console.log('something else other than 200 was returned');
       }
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}


const displayTreehouse = (json) => {
  var badgesDiv = document.getElementsByClassName('json-data');
  var activePage = $('ul.pagination li.active a').attr('data-target');
  var pages = $('ul.pagination li a');

  function pagesCase(el) {
    let prev = $('ul.pagination li a[aria-label="Previous"]');
    let next = $('ul.pagination li a[aria-label="Next"]');
    console.log(prev, next);
    switch (el) {
      case '1':
        createBadges(1, 5);
        prev.parent().addClass('disabled');

        break;
      case '2':
        createBadges(6, 10);
        console.log('badges 6 10');
        prev.parent().removeClass('disabled');
        next.parent().removeClass('disabled');

        break;
      case '3':
        createBadges(11, 15);
        next.parent().addClass('disabled');

        break;

      default:
        createBadges(1, 5);
        prev.parent().addClass('disabled');

    }
  }

  pages.each(function(x) {
    $(this).click(function() {
      let el = $('ul.pagination li.active a');
      let current = parseInt(el.attr('data-target'));
      if ($(this).attr('aria-label') == 'Previous') {

        console.log(current);
        if (current === 1) {
          el.parent().removeClass('active');
          el.parent().addClass('active');
          $(this).parent().addClass('disabled');
          // createBadges(1, 5);
          pagesCase('1');
          console.log('badges 1 5');
        } else if (current === 2) {
          el.parent().removeClass('active');
          el.parent().prev().addClass('active');
          pagesCase('1');
          // createBadges(1, 5);
          console.log('badges 1 5');
        } else if (current == 3) {
          el.parent().removeClass('active');
          el.parent().prev().addClass('active');
          pagesCase('2');
          console.log('badges 6 10');
        }
      } else if ($(this).attr('aria-label') == 'Next') {
        console.log(current);
        if (current === 3) {
          el.parent().removeClass('active');
          el.parent().addClass('active');
          pagesCase('3')
          console.log('badges 11 15');
        } else if (current === 2) {
          el.parent().removeClass('active');
          el.parent().next().addClass('active');
          pagesCase('3')
          console.log('badges 11 15');
        } else if (current === 1) {
          el.parent().removeClass('active');
          el.parent().next().addClass('active');
          pagesCase('2');
          // createBadges(6, 10);

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
  console.log(activePage);

  function createBadges(from, to) {
    let badges = [];
    for (let i = from; i <= to; i++ ) {
      badges.push(json.badges[Object.keys(json.badges)[Object.keys(json.badges).length - i]]);
    }
    var badgesHTML = ``;
    for (const key in badges) {
      badgesHTML += `
        <tr data-href="${badges[key].url}">
          <td><img src="${badges[key].icon_url}" class="badge-icon"></td>
          <td>${badges[key].courses[1].title}</td>
          <td>${badges[key].earned_date.substring(0, 10)}</td>
          <td>${badges[key].courses[0].title}</td>
        </tr>
        `;

      // console.log(badges[key].icon_url);
    }
    $('tr').click(function() {

      window.open($(this).attr('data-href'));
    });
    $(badgesDiv).html(badgesHTML);
    // console.log(badgesHTML);
  }

};


const displayGithub = (data) => {
  let profile = [];
  profile.push(JSON.parse(data));
  console.log(profile);
  const avatar = profile[0].avatar_url;
  const name = profile[0].name;
  const location = profile[0].location;
  const alias = profile[0].login;



  console.log(avatar);
  const avatarDiv = $('#github .container');

  let githubAvatar = ``;
  githubAvatar += `
  <div class="row">
    <div class="github-avatar ">
      <img class="img" src="${avatar}" alt="${name} avatar photo">

    </div>
    <div class="github-repos ">
    <h4 class="heading">${name} <span class="alias">(${alias})</span></h4>
    <h5 class="heading">${location}</h5>

    <button type="button" class="btn btn-primary btn-sm">My repos</button>
    <button type="button" class="btn btn-primary btn-sm">Hire me</button>
    </div>
  </div>
  `;
  $(avatarDiv).append(githubAvatar);


}
