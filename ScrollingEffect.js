$(window).scroll(function(){
  
  var scroll = $(window).scrollTop();

  if (scroll > 0 ) {

 
    $('nav').css("background-color","white");
    $('.menu__link').css("color", "#4b4b4b");
    $("#LogoImage").attr("src", "LogoBlue.png");

 
  }

  if (scroll <= 0 ) {
    $('nav').removeClass('scrolled');
    $('nav').css("background-color", "transparent");
    $('.menu__link').css("color", "#b5b5b5");
    $("#LogoImage").attr("src", "Logo.png");
    $('.menu__item--current').css("color", "white");
    $('.menu__link::after').css("color", "white");
 }

});