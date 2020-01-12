const bodyEl = document.querySelector("html");
const moreInfoButton = document.querySelector("#menuButton");
const menuWindowEl = document.querySelector(".menuWindow");
const menuCloseButton = document.querySelectorAll(".closeButton");
const navItemEl = document.querySelectorAll(".navItem");
const thisWindowEl = document.querySelectorAll(".thisWindow");
const galleryImageEl = document.querySelectorAll(".gallery-image");
const hamburgerNav = document.getElementById("hamburger-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const modalImageSrc = document.getElementById("modal-image");

// Fixes VH Jitter
let vh = window.innerHeight * 0.01;
document.getElementById("banner").style.setProperty('vh', vh + "px"); //review required


//Hamburger menu

//enable sticky
/*
hamburgerNav.waypoint(function(direction) {
  if (direction == "down") {
      $('nav').addClass('.sticky-nav');
  } else {
      $('nav').removeClass('.sticky-nav');
  }
}, {
offset: '60px;' //what is this?
});
*/


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
    modalImageSrc.src = getSrc;
}

function clickList(list) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function(){
        let x = event.target.src
        return getImageSrc(x);
    });
  }
}
clickList(galleryImageEl);


/*

Start States??***= if(indxOf(currentIndex))

Converet ModalImage.src = gallerysourcelist[index]

. get image list number
. create toArray[] with gallery-image src.
. loop array #s
. current image = current array #

Convert event "on Swipe" @ media 768


/*=========================
 Modal Slideshow
=========================*/

//Pass Gallery's Image src to Array.
let gallerySourceList = [];
let counter = 0;

for(let i = 0; i < galleryImageEl.length; i++) {
  gallerySourceList.push(galleryImageEl[i].firstElementChild.src);
  }

//Array Index Counter


function adder(){ 
  counter++;
  if (counter > 5 ){
    counter = 0;
  }
  console.log(counter);
  modalImageSrc.src = gallerySourceList[counter];
} 

function subtracter(){ 
  counter--;
  if (counter < 0 ) {
    counter = 5;
  }
  console.log(counter);
  modalImageSrc.src = gallerySourceList[counter];
} 



function baguulSchool2(change) {
modalImageSrc.src = gallerySourceList[change];
}
baguulSchool2(counter)