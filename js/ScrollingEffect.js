$(window).scroll(function(){
  
  var scroll = $(window).scrollTop();

  if (scroll > 0 ) {
    $('nav').addClass('scrolled');
    $('nav').addClass('scrolled');
    $('.menu__link').css("color", "#b5b5b5");
    





  }

  if (scroll <= 0 ) {
    $('nav').removeClass('scrolled');
    $('nav').css("background-color", "transparent");
    $('.menu__link').css("color", "#b5b5b5");



 }

});