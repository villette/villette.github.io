$(document).ready(function() {

  // Project thumbnails animation
  $('div.project').mouseenter(function(e) {
    $(this).children('a').children('span').fadeIn(200);
  });

  $('div.project').mouseleave(function(e) {
    $(this).children('a').children('span').fadeOut(200);
  });

  // Portfolio dynamic display
  $('div.portfolio div.show-more button').click(function(e) {
    $('div.portfolio div.project-group:hidden:first').slideDown();
    $('html, body').animate({ scrollTop: $(document).height() });

    if ($('div.portfolio div.project-group:hidden').length == 0) {
      $('div.portfolio div.show-more').slideUp();
    }
  });

});
