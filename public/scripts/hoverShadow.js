
const hoverShadow = function() {
  $(".tweeter-container").hover(function() {
    $(this).toggleClass('shadow');
  });
  $(".tweeter-container").hover(function() {
    $(this).find(".handle").show();
  },
  function() {
    $(this).find(".handle").hide();
  }
  );
};
