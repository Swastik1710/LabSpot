window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js');
  }
});

// LOADER
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("body").style.overflow = "hidden"; //To prevent scrolling
    document.querySelector("#load").style.visibility = "visible";
  }
  else {
    document.querySelector("#load").style.display = "none";
    document.querySelector("body").style.overflow = "visible";
    document.querySelector("body").style.visibility = "visible";
  }
};

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