$(document).ready(function() {
  $("article").hover(function() {
    $(this).toggleClass('shadow');
    $(this).find(".handle").show();

  });
  $("article").hover(function () {
    $(this).find(".handle").show();
  }, 
  function () {
    $(this).find(".handle").hide();
  }
  );
});