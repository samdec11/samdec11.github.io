$(function() {
  $('nav').on('click', '#about', aboutScroll);
  $('nav').on('click', '#proj', projScroll);
  $('nav').on('click', '#cont', contScroll);
});

function aboutScroll(e) {
  e.preventDefault();
  $('body').animate({scrollTop:0}, 'slow');
}

function projScroll(e) {
  var height = $('#projects').offset().top;
  e.preventDefault();
  $('body').animate({scrollTop: height}, 'slow');
}

function contScroll(e) {
  height = $('footer').offset().top;
  e.preventDefault();
  $('body').animate({scrollTop: height}, 'slow');
}