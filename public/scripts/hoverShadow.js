$(document).ready(function() {
  $("article").hover(function() {
    $(this).toggleClass('shadow');

  });
  $("article").hover(function () {
    $(this).find(".handle").show();
  }, 
  function () {
    $(this).find(".handle").hide();
  }
  );
});