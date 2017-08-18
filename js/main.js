$(document).ready(function() {
  $(window).bind('scroll', function() {
    // The value of where the "scroll" is.
    if($(window).scrollTop() > 175){
      $('nav').addClass('sticky');
    }else{
      $('nav').removeClass('sticky');
    }
  })
  var counter = 0;
  var images = ['img/banner.png','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg'];

  $(function() {
    changeImages();
    function changeImages() {
      setTimeout(changeImages,4200);
      if(counter == images.length-1) {
        counter = 0;
        $('#pautImage').attr("src",images[counter]);
      } else {
        counter++;
        $('#pautImage').attr("src",images[counter]);
      }
    }
  });
});