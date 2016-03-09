$(window).scroll(function(){
  
  var scroll = $(window).scrollTop();

  if (scroll > 0 ) {
    $('nav').addClass('scrolled');
  }

  if (scroll <= 0 ) {
    $('nav').removeClass('scrolled');
 }

});