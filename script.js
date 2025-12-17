$(document).ready(function () {
  $("#signupopen").click(function () {
    $("#signup").slideDown("slow");
    $("#signupopen").hide();
    $("#noaccount").hide();
  });
  $("#loginbut").click(function () {
    $("#signupopen").slideToggle("slow");
    $("#signup").slideToggle("slow");
    $("#noaccount").slideToggle("slow");
  });
});
