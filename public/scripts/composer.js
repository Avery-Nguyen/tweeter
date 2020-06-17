$(document).ready(function() {
  const btn = $('#topBtn');
  const nav = $('nav');
  $(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
      btn.show();
      nav.hide();
    } else {
      btn.hide();
      nav.show();
    }
  });
  btn.click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    $('.new-tweet').toggle('slow');
    $('#tweet-text').focus();
  });
});