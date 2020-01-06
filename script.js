const bodyEl = document.querySelector("html");
const moreInfoButton = document.querySelector("#menuButton");
const menuWindowEl = document.querySelector(".menuWindow");
const menuCloseButton = document.querySelectorAll(".closeButton");
const navItemEl = document.querySelectorAll(".navItem");

const thisWindowEl = document.querySelectorAll(".thisWindow");

const galleryImageEl = document.querySelectorAll(".gallery-image");



// Fixes VH Jitter
let vh = window.innerHeight * 0.01;
document.getElementById("banner").style.setProperty('vh', vh + "px");


// Restores Scrolls
function enableScroll() {
  bodyEl.style.overflowY = "visible";
}



// Navigation & MORE INFO BUTTON
moreInfoButton.addEventListener('click', function () {
  menuWindowEl.style.visibility = "visible";
  bodyEl.style.overflowY = "hidden";
});


let closeMenuWindow = menuCloseButton[0].addEventListener('click', function () {
  menuWindowEl.style.visibility = "hidden";
  enableScroll();
});

for (var i = 0; i < navItemEl.length; i++) {
  navItemEl[i].addEventListener('click', function () {
    menuWindowEl.style.visibility = "hidden";
    enableScroll();
  });
}


// Nav & Modal Togglers //

let closeMenuWindow2 = menuCloseButton[1].addEventListener('click', function () {
  thisWindowEl[1].style.visibility = "hidden";
  enableScroll();
});

for (var i = 0; i < galleryImageEl.length; i++) {
  galleryImageEl[i].addEventListener('click', function () {
    thisWindowEl[1].style.visibility = "visible";
    bodyEl.style.overflowY = "hidden";
  });
}

//Gallery Image & Src Selector//

let getImageSrc = function(getSrc) {
  const foo = document.getElementById("modal-image");
  foo.src = getSrc;
}


// function clickList(list) {
//   for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener("click", function(){
//         let x = list[i].firstChild.src
//         console.log(event.target.src);
//         return insertModalImage(x);
//     });
//   }
// }
// clickList(galleryImageEl);


function clickList(list) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function(){
        let x = event.target.src
        return getImageSrc(x);
    });
  }
}
clickList(galleryImageEl);

//Modal Slideshow//
