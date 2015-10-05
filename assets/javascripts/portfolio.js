$(function() {
  intro()
});

function intro() {
  setTimeout(function() {
    highlight('S');
    setTimeout(function() {
      highlight('E');
      setTimeout(function() {
        highlight('A');
        setTimeout(function() {
          highlight('N');
          setTimeout(function() {
            $('line').css('stroke', '#000');
            setTimeout(function () {
              $('.overlay').fadeOut(2250);
            }, 1000)
          }, 1500)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 2000);
};

function highlight(letter) {
  var lines = []
  $('line').css('stroke', '#fff')
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