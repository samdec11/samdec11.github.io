$(function() {
  $(window).scroll(function() {
  var scr = $(this).scrollTop() / 32
  var nscr = -($(this).scrollTop() / 16)
  $('.big-gear').css({
    '-webkit-transform' : 'rotate('+ scr +'deg)',
    '-moz-transform' : 'rotate('+ scr +'deg)',
    '-ms-transform' : 'rotate('+ scr +'deg)',
    'transform' : 'rotate('+ scr +'deg)'
    });
  // $('.little-gear').css({
  //   '-webkit-transform' : 'rotate('+ nscr +'deg)',
  //   '-moz-transform' : 'rotate('+ nscr +'deg)',
  //   '-ms-transform' : 'rotate('+ nscr +'deg)',
  //   'transform' : 'rotate('+ nscr +'deg)'
  //   })
  })
});