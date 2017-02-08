$(window).scroll(function() {
 if ($(this).scrollTop() > 100){
    $('.navbar').addClass("sticky ");
    setTimeout(function() {
      $('.sticky').addClass('sticky-color');
    }, 300);
 } else {
   $('.sticky').removeClass('sticky-color');
    $('.navbar').removeClass("sticky");


 }
});
