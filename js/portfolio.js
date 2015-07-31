$(document).ready(function() {

  // Project thumbnails animation
  $('div.project').mouseenter(function(e) {
    $(this).children('a').children('span').fadeIn(200);
  });

  $('div.project').mouseleave(function(e) {
    $(this).children('a').children('span').fadeOut(200);
  });

  // Portfolio pagination
  $(window).bind('hashchange', function(e) {
    var url = $.param.fragment() || 'page-1';
    var first = ('#' + url == $('ul.pagination li.first a').attr('href'));
    var last = ('#' + url == $('ul.pagination li.last a').attr('href'));

    $('ul.pagination li.previous').toggleClass('disabled', first);
    $('ul.pagination li.next').toggleClass('disabled', last);

    var previousHref = first ? '#' + url : '#' + url.replace(/\d+/, function(a) { return parseInt(a) - 1; });
    $('ul.pagination li.previous a').attr('href', previousHref);
    var nextHref = last ? '#' + url : '#' + url.replace(/\d+/, function(a) { return parseInt(a) + 1; });
    $('ul.pagination li.next a').attr('href', nextHref);

    $('ul.pagination li').removeClass('active');
    $('ul.pagination li').has('a[href="#' + url + '"]').addClass('active');

    $('div.portfolio').children(':visible').hide();
    $('div.portfolio div.' + url).show();
  });

  $(window).trigger('hashchange');

});
