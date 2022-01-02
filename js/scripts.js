window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js');
  }
});

// LOADER
// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//     document.querySelector("body").style.visibility = "hidden";
//     document.querySelector("body").style.overflow = "hidden"; //To prevent scrolling
//     document.querySelector("#load").style.visibility = "visible";
//   }
//   else {
//     document.querySelector("#load").style.display = "none";
//     document.querySelector("body").style.overflow = "visible";
//     document.querySelector("body").style.visibility = "visible";
//   }
// };
var loader = document.getElementById("load");
window.addEventListener ("load", function() {
  loader.style.display = 'none';
});
// Experiment Options
var expList = document.getElementsByClassName("imp");
var i;
for (i = 0; i < expList.length; i++) {
  expList[i].addEventListener("click", function () {
    var options = this.nextElementSibling;
    if (options.style.display === "block") {
      options.style.display = "none";
    } else {
      options.style.display = "block";
    }
  });
}

// SOCIAL MEDIA BUTTONS
$(".icons li").click(function () {
  $(this).toggleClass("shadow-2").siblings();
  $(this).toggleClass("fill-color").siblings();
  $(this).toggleClass("fill-back").siblings();
});

// FOOTER FORM RESET
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};