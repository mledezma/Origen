$(document).ready(function () {
  $(window).bind('scroll', function () {
    // The value of where the "scroll" is.
    if ($(window).scrollTop() > 175) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  })
  var counter = 0;
  var images = ['img/banner.png', 'img/banner2.jpg', 'img/banner3.jpg', 'img/banner4.jpg', 'img/banner5.jpg'];

  $(function () {
    changeImages();

    function changeImages() {
      setTimeout(changeImages, 4200);
      if (counter == images.length - 1) {
        counter = 0;
        $('#pautImage').attr("src", images[counter]);
      } else {
        counter++;
        $('#pautImage').attr("src", images[counter]);
      }
    }
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
});