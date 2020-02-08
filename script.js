const bodyEl = document.querySelector("html");
const moreInfoButton = document.querySelector("#menuButton");
const menuWindowEl = document.querySelector(".menuWindow");
const menuCloseButton = document.querySelectorAll(".closeButton");
const navItemEl = document.querySelectorAll(".navItem");
const skillsSection = document.getElementById("skills");
const thisWindowEl = document.querySelectorAll(".thisWindow");
const galleryImageEl = document.querySelectorAll(".gallery-image");
const hamburgerNav = document.getElementById("hamburger-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const modalImage = document.getElementById("modal-image");

// Fixes VH Jitter
let vh = window.innerHeight * 0.01;
document.getElementById("banner").style.setProperty('--vh', vh + "px"); //review required


// Navigation & MORE INFO Button
let navLoop = [hamburgerIcon, moreInfoButton];

for(let item in navLoop) { 
  navLoop[item].addEventListener('click', function() {
  menuWindowEl.style.visibility = "visible";
  bodyEl.style.overflowY = "hidden";
  })
};

// Restores Scrolls
function enableScroll() {
  bodyEl.style.overflowY = "visible";
}

let closeMenuWindow = menuCloseButton[0].addEventListener('click', function () {
  menuWindowEl.style.visibility = "hidden";
  enableScroll();
});

for (var i = 0; i < navItemEl.length -1; i++) {
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


/*=========================
 Modal Slideshow
=========================*/

//Set Gallery Image for arrow buttons


//Pass Gallery's Image src to Array.
let gallerySourceList = [];
let counter

//Initail Gallery Image & Src Selector//
let getImageSrc = function(getSrc) {
    modalImage.src = getSrc;
}

function clickList(list) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
        let x = event.target.src
        counter = gallerySourceList.indexOf(x);
        return getImageSrc(x);
    });
  }
}

for(let i = 0; i < galleryImageEl.length; i++) {
  gallerySourceList.push(galleryImageEl[i].firstElementChild.src);
  }

clickList(galleryImageEl);

//Arrow Click Counter(Array Index Counter)
function next() { 
  counter++;
  if (counter > 5) {
    counter = 0;
  }
  modalImage.src = gallerySourceList[counter];
} 

function prev(){ 
  counter--;
  if (counter < 0) {
    counter = 5;
  }
  modalImage.src = gallerySourceList[counter];
} 


