function addAnimation(target, animation) {
  $.each($(target), function(x, y) {
    let el = $(this);
      el.viewportChecker({
        classToAdd: animation
      });
  });
}
