function highlight(letter) {
  var lines = [];
  $('line').css('stroke', 'transparent');
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
  for (var i = 0; i < lines.length; i++) {
    lines[i].css('stroke', '#000');
  }
}

function intro() {
  if (screen.width < 770) {
    return $('.overlay').hide();
  }
  return setTimeout(function () {
    highlight('S');
    setTimeout(function () {
      highlight('E');
      setTimeout(function () {
        highlight('A');
        setTimeout(function () {
          highlight('N');
          setTimeout(function () {
            $('line').css('stroke', '#000');
            setTimeout(function () {
              $('.overlay').fadeOut(2250);
            }, 1000);
          }, 1500);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 2000);
}

$(function () {
  intro();
});
