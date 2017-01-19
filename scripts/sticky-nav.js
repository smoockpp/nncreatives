$(window).scroll(function() {
if ($(this).scrollTop() > 320){
    $('.navbar').addClass("sticky show");
  }
  else{
    $('.navbar').removeClass("sticky show");
  }
});
