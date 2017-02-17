'use strict';




const displayGithub = (data) => {
  let profile = [];
  profile.push(data);
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
    <div class="github-avatar col-xs-12 col-sm-5 col-sm-offset-1">
      <img class="img" src="${avatar}" alt="${name} avatar photo">

    </div>
    <div class="github-repos col-xs-12 col-sm-5">
    <h4 class="heading">${name}</h4>
    <h5 class="heading">${location}</h5>

    <button type="button" class="btn btn-primary btn-sm">My repos</button>
    <button type="button" class="btn btn-primary btn-sm">Hire me</button>
    </div>
  </div>
  `;
  $(avatarDiv).append(githubAvatar);
  const profileImage = $('.github-avatar img');

  profileImage.click(function() {
    $(this).draggabale
  });

}
