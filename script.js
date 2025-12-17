$(document).ready(function () {
  $("#signupopen").click(function () {
    $("#signup").slideDown("slow");
    $("#login").hide();
  });
  $("#loginbut").click(function () {
    $("#login").slideToggle("slow");
    $("#signup").hide();
  });
});
