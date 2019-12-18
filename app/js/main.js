function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(window).on('scroll', function() {
  const elem = $("#first-animated");
    if (isScrolledIntoView(elem)) {
      elem.addClass("about-us");
    }
});