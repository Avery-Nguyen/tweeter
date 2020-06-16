/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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