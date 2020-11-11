// Javascript Code for when toggling on navbar
$(document).ready(function() {
  $(".nav-toggler").on("click", function() {
    $(".nav-toggler").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});
