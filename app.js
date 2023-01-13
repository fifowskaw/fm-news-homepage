const HAMBURGER_BUTTON = document.querySelector(
  "header .hamburger-opener button"
);
const CLOSE_BUTTON = document.querySelector("header .hamburger-close-button");

const BODY = document.querySelector("body");
const HAMBURGER_MENU = document.querySelector("header .hamburger");
const COVER = document.querySelector(".cover");

const openMenu = () => {
  HAMBURGER_MENU.style.display = "block";
  COVER.style.display = "block";
  disableScroll();
  // BODY.style.height = "100%";
  // BODY.style.overflow = "hidden";
};
const closeMenu = () => {
  HAMBURGER_MENU.style.display = "none";
  COVER.style.display = "none";
  enableScroll();

  // BODY.style.height = "100hv";
  // BODY.style.overflow = "auto";
};

HAMBURGER_BUTTON.addEventListener("click", openMenu);
CLOSE_BUTTON.addEventListener("click", closeMenu);

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}
