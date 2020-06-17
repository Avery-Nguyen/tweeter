$(document).ready(function() {
  const btn = $('#topBtn');
  $(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
      btn.show()
    } else {
      btn.hide()
    }
  });
  btn.click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});