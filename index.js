"use strict";

const navBtn = document.querySelector(".navigation__button");
const navBackground = document.querySelector(".navigation__background");
const nav = document.querySelector(".navigation__nav");
const navList = document.querySelector(".navigation__list");
const navLinks = document.querySelectorAll(".navigation__link");
const navCheckbox = document.getElementById("navi-toggle");
const btnScrollto = document.querySelector(".btn--scroll-to");
const sectionTour = document.querySelector("#tours");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const popupOpenBtns = document.querySelectorAll(".popup__open");
const popupCloseBtn = document.querySelector(".popup__close");
const popupOpenBookingBtn = document.querySelector(".popup__open-booking");

//Open and Closing modal functions
const open = (el1, el2) => {
  el1.classList.remove("hidden");
  el2.classList.remove("hidden");
};

const close = (el1, el2) => {
  el1.classList.add("hidden");
  el2.classList.add("hidden");
};

//POPUP

popupOpenBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    open(popup, overlay);
  });
});

popupCloseBtn.addEventListener("click", function () {
  close(popup, overlay);
});

popupOpenBookingBtn.addEventListener("click", function () {
  close(popup, overlay);
  document.querySelector("#booking").scrollIntoView({ behavior: "smooth" });
});

overlay.addEventListener("click", function (e) {
  !overlay.classList.contains("hidden") && close(popup, overlay);
});

document.addEventListener("keydown", function (e) {
  if (e.code == "Escape" && !popup.classList.contains("hidden")) {
    close(popup, overlay);
  }
});

//remove hidden class to enable navigation btn functionality.
navBtn.addEventListener("click", function () {
  open(navBackground, nav);
});

//Add hidden class back to the navBackground, and return to normal state when navLink get clicked.

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    close(navBackground, nav);
    //unchecked checkbox input to turn the hamburger icon back to normal
    navCheckbox.checked = false;
  });
});

//Smooth scrolling for the header button.

btnScrollto.addEventListener("click", function (e) {
  sectionTour.scrollIntoView({ behavior: "smooth", block: "center" });
});

//Event Delegations

//Smoth Scrolling for all the navLinks that nested inside the navigation.

navList.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("navigation__link")) {
    const id = e.target.getAttribute("href");
    document
      .querySelector(id)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
