$(document).ready(function() {
  $("#tweet-text").keyup(function() {
    const max = 140;
    const char = $(this).val().length;
    $(".counter").text(140 - char);
    if (char >= max) {
      $(".counter").css('color', 'red');
    } else if (char < max) {
      $(".counter").css('color', '#545149');
    }
  });
});