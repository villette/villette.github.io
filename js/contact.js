$(document).ready(function() {

  $(window).trigger('hashchange');

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
