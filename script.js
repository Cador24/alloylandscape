const bodyEl = document.querySelector("html");
const moreInfoButton = document.querySelector("#menuButton");
const menuWindowEl = document.querySelector(".menuWindow");
const menuCloseButton = document.querySelectorAll(".closeButton");
const navItemEl = document.querySelectorAll(".navItem");
const thisWindowEl = document.querySelectorAll(".thisWindow");
const galleryImageEl = document.querySelectorAll(".gallery-image");
const hamburgerNav = document.getElementById("hamburger-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");


// Fixes VH Jitter
let vh = window.innerHeight * 0.01;
document.getElementById("banner").style.setProperty('vh', vh + "px");


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
[hamburgerIcon,moreInfoButton].forEach(item => { 
item.addEventListener('click', () => {
  menuWindowEl.style.visibility = "visible";
  bodyEl.style.overflowY = "hidden";
  })
});


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
