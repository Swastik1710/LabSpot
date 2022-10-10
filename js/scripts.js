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


function search_lab() {
  let input = document.getElementById('searchbar').value
  let list = document.getElementById('search')
  input=input.toLowerCase();
  let x = document.getElementsByClassName('tags')
  if(input=="")
  {
    list.style.display="none";
  }
  else
  {
    list.style.display="block";
  }
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="block";                 
      }
  }
}
let searchbar = document.getElementById('searchbar')
let list = document.getElementById('search')
window.onclick = function(event) {
  if (event.target!= list && event.target!=searchbar) {
    list.style.display = "none";
  }
}