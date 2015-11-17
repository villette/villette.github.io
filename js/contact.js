$(document).ready(function() {

  // Handle form with AJAX
  $('form.contact').submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: $(this).attr('action'),
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      complete: function(xhr, status) {
        var message = $('div#form').data(status);
        var attribute = (status == 'error') ? 'danger' : status;

        $('div.alert').remove();
        $('form.contact').before('<div id="' + status + '" class="alert alert-' + attribute + '" style="display: none;"><a href="#" data-dismiss="alert" class="close">×</a>' + message + '</div>');
        $('div#' + status).fadeIn();
      },
    });
  });

});
