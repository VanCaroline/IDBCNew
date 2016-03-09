$( document ).ready(function() {

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".header").addClass("scrolling");
  } else {
    $(".header").removeClass("scrolling");
  }
});
});