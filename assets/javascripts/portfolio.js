$(function() {
  intro();
  // $(window).scroll(function() {
  // var scr = $(this).scrollTop() / 32
  // var nscr = -($(this).scrollTop() / 16)
  // $('.big-gear').css({
  //   '-webkit-transform' : 'rotate('+ scr +'deg)',
  //   '-moz-transform' : 'rotate('+ scr +'deg)',
  //   '-ms-transform' : 'rotate('+ scr +'deg)',
  //   'transform' : 'rotate('+ scr +'deg)'
  //   });
  // $('.little-gear').css({
  //   '-webkit-transform' : 'rotate('+ nscr +'deg)',
  //   '-moz-transform' : 'rotate('+ nscr +'deg)',
  //   '-ms-transform' : 'rotate('+ nscr +'deg)',
  //   'transform' : 'rotate('+ nscr +'deg)'
  //   })
  // })
});

function intro() {
  $('svg').fadeIn(2000);
  setTimeout(function() {
    highlight('S');
    setTimeout(function() {
      highlight('E');
      setTimeout(function() {
        highlight('A');
        setTimeout(function() {
          highlight('N');
          setTimeout(function() {
            $('.left-line').css('stroke', '#ff9999');
            $('.diag-line').css('stroke', '#99ff99');
            $('.right-line').css('stroke', '#cc99ff');
            $('.btm-line').css('stroke', '#ffcc99');
            $('.top-line').css('stroke', '#99ffff');
            $('.mid-line').css('stroke', '#ffff99');
            setTimeout(function () {
              $('.overlay').fadeOut(2000);
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 2000);
};

function highlight(letter) {
  var lines = []
  $('line').css('stroke', '#ccc')
  switch(letter) {
    case 'S':
      lines = [$('.top-line'), $('.diag-line'), $('.btm-line')];
      break;
    case 'E':
      lines = [$('.top-line'), $('.left-line'), $('.mid-line'), $('.btm-line')];
      break;
    case 'A':
      lines = [$('.left-line'), $('.mid-line'), $('.diag-line')];
      break;
    case 'N':
      lines = [$('.left-line'), $('.diag-line'), $('.right-line')];
      break;
  }
  for(i = 0; i < lines.length; i++) {
    lines[i].css('stroke', 'red')
  }
};