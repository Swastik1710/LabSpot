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

// HOME PAGE CAROUSEL
// var indexValue = 1;
// showImg(indexValue);
// function btm_slide(e) {
//   showImg((indexValue = e));
// }
// function side_slide(e) {
//   showImg((indexValue += e));
// }
// function showImg(e) {
//   var i;
//   const img = document.querySelectorAll(".img");
//   const slider = document.querySelectorAll(".btm-slides span");
//   if (e > img.length) {
//     indexValue = 1;
//   }
//   if (e < 1) {
//     indexValue = img.length;
//   }
//   for (i = 0; i < img.length; i++) {
//     img[i].style.display = "none";
//   }
//   for (i = 0; i < slider.length; i++) {
//     slider[i].style.background = "rgba(255,255,255,0.1)";
//   }
//   img[indexValue - 1].style.display = "block";
//   slider[indexValue - 1].style.background = "white";
// }

// FOOTER FORM RESET
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// PWA INSTALL BTN
// const divInstall = document.getElementById("installContainer");
// const butInstall = document.getElementById("butInstall");

// window.addEventListener("beforeinstallprompt", (event) => {
//   console.log("👍", "beforeinstallprompt", event);
//   // Stash the event so it can be triggered later.
//   window.deferredPrompt = event;
//   // Remove the 'hidden' class from the install button container
//   divInstall.classList.toggle("hidden", false);
// });

// butInstall.addEventListener("click", async () => {
//   console.log("👍", "butInstall-clicked");
//   const promptEvent = window.deferredPrompt;
//   if (!promptEvent) {
//     // The deferred prompt isn't available.
//     return;
//   }
//   // Show the install prompt.
//   promptEvent.prompt();
//   // Log the result
//   const result = await promptEvent.userChoice;
//   console.log("👍", "userChoice", result);
//   // Reset the deferred prompt variable, since
//   // prompt() can only be called once.
//   window.deferredPrompt = null;
//   // Hide the install button.
//   divInstall.classList.toggle("hidden", true);
// });

// window.addEventListener("appinstalled", (event) => {
//   console.log("👍", "appinstalled", event);
//   // Clear the deferredPrompt so it can be garbage collected
//   window.deferredPrompt = null;
// });