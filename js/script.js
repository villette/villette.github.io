(function($) {
  "use strict"; // Start of use strict

  // Initialize Google ReCAPTCHA
  grecaptcha.ready(function () {
    grecaptcha.execute("6LdUEJ4cAAAAAKwpdjNvc1QEw8xYzwYpEqBE4uys", { action: "contact" }).then(function (token) {
      document.getElementById('captcha-response').value = token;
    });
  });

  // Handle contact form with AJAX
  $('section#contact form').submit(function (e) {
    e.preventDefault();

    $.ajax({
      url: $(this).attr('action'),
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      complete: function (xhr, status) {
        var message = $('section#contact div#form').data(status);
        var attribute = (status == 'error') ? 'danger' : status;

        $('div.alert').remove();
        $('section#contact form').before('<div id="' + status + '" class="alert alert-' + attribute + '" style="display: none;"><a href="#" data-dismiss="alert" class="close">×</a>' + message + '</div>');
        $('div#' + status).fadeIn();
      },
    });
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: 'li.scrollspy'
  });

})(jQuery); // End of use strict
