$(document).ready(function () {
  window.onload = (event) => {
    $(".preloader").fadeOut("fast");
  };
  setTimeout(function () {
    $(".preloader").fadeOut("fast");
  }, 1500);
});

window.addEventListener("load", (event) => {
  console.log("page is loaded successfully");
  $(".preloader").fadeOut("fast");
});
