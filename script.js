const moreInfoButton = document.querySelector("#menuButton");
const menuWindowEl = document.querySelector(".menuWindow");
const menuCloseButton = document.querySelectorAll(".closeButton");
const navItemEl = document.querySelectorAll(".navItem");

const modalEl = document.querySelector(".modal-container");

const thisWindowEl = document.querySelectorAll(".thisWindow");

const galleryImageEl = document.querySelectorAll(".gallery-image");




// MORE INFO BUTTON
moreInfoButton.addEventListener('click', function () {
  menuWindowEl.style.visibility = "visible";

});

let closeMenuWindow = menuCloseButton[0].addEventListener('click', function () {
  menuWindowEl.style.visibility = "hidden";
});



for (var i = 0; i < navItemEl.length; i++) {
  navItemEl[i].addEventListener('click', function () {
    menuWindowEl.style.visibility = "hidden";

  });

}

// Toggle Visibility
// function toggleWindow(myWindow) {
// for (var i = 0; i < thisWindowEl.length; i++)
//   thisWindowEl[i].addEventListener('click', function() {
//     if (thisWindowEl[i].style.visibility == "hidden"){
//       thisWindowEl[i].style.visibility = "visbile";
//     } else; {
//       thisWindowEl[i].style.visibility = "hidden";
//     }

// });

for (var i = 0; i < galleryImageEl.length; i++) {
  galleryImageEl[i].addEventListener('click', function () {
    thisWindowEl[1].style.visibility = "visible";

  });
}


let closeMenuWindow2 = menuCloseButton[1].addEventListener('click', function () {
  thisWindowEl[1].style.visibility = "hidden";
});

for (var i = 0; i < galleryImageEl.length; i++) {
  galleryImageEl[i].addEventListener('click', function () {
    thisWindowEl[1].style.visibility = "visible";

  });
}
