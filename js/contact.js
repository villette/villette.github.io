(function($) {
  "use strict"; // Start of use strict

  // Handle form with AJAX
  $('section#contact form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: $(this).attr('action'),
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      complete: function(xhr, status) {
        var message = $('section#contact div#form').data(status);
        var attribute = (status == 'error') ? 'danger' : status;

        $('div.alert').remove();
        $('section#contact form').before('<div id="' + status + '" class="alert alert-' + attribute + '" style="display: none;"><a href="#" data-dismiss="alert" class="close">×</a>' + message + '</div>');
        $('div#' + status).fadeIn();
      },
    });
  });

})(jQuery); // End of use strict
