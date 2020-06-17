$(document).ready(function() {
  $("#tweet-text").keyup(function() {
    const max = 140;
    const char = $(this).val().length;
    $(this).parent().find("output").text(140 - char);
    if (char >= max) {
      $(this).parent().find("output").addClass('red');
    } else if (char < max) {
      $(this).parent().find("output").removeClass('red');
    }
  });

});