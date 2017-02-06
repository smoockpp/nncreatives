$(window).scroll(function() {
 if ($(this).scrollTop() > 100){
    $('.navbar').addClass("sticky ");
    // $('#carousel').css('top', '0');
 } else {
    $('.navbar').removeClass("sticky ");
    // $('#carousel').css('top', '-100px');
 }
});
