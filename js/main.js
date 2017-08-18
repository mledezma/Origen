$(document).ready(function() {
  $(window).bind('scroll', function() {
    // The value of where the "scoll" is.
    if($(window).scrollTop() > 175){
      $('nav').addClass('sticky');
    }else{
      $('nav').removeClass('sticky');
    }
  })
});