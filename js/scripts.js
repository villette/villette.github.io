$(document).ready(function() {
  // Project thumbnails animation
  $('div.project').mouseenter(function(e) {
    $(this).children('a').children('span').fadeIn(200);
  });

  $('div.project').mouseleave(function(e) {
    $(this).children('a').children('span').fadeOut(200);
  });

  // Handle form with AJAX
  $('form.contact').submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: '//formspree.io/villette.pierre@gmail.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      complete: function(xhr, status) {
        switch (status) {
          case 'success':
            var attribute = 'success';
            var message = 'Votre message a bien été envoyé.';
            break;

          case 'error':
          default:
            var attribute = 'danger';
            var message = 'Une erreur est apparue, veuillez réessayer plus tard.';
            break;
        }

        $('div.alert').remove();
        $('form.contact').before('<div id="' + status + '" class="alert alert-' + attribute + '" style="display: none;"><a href="#" data-dismiss="alert" class="close">×</a>' + message + '</div>');
        $('div#' + status).fadeIn();
      },
    });
  });
});
