/*** HEADER  */

const mobileMenuOpenTrigger = document.querySelector(".mobile-menu-drawer");
const mobileMenuCloseTrigger = document.querySelector(
  ".mobile-menu .close-mobile-menu"
);
const overlay = document.querySelector(".overlay");
let isAnimating = false;

const handleOpenMobileMenu = (open) => {
  if (isAnimating) return;
  isAnimating = true;

  const mobileMenu = document.querySelector(".mobile-menu");

  if (open) {
    mobileMenu.style.display = "";
    overlay.style.display = "";

    setTimeout(() => {
      overlay.classList.add("shown");
      setTimeout(() => {
        mobileMenu.classList.add("shown");
        isAnimating = false;
      }, 100);
    }, 1);
  } else {
    mobileMenu.classList.remove("shown");
    setTimeout(() => {
      overlay.classList.remove("shown");
      setTimeout(() => {
        mobileMenu.style.display = "none";
        overlay.style.display = "none";
        isAnimating = false;
      }, 500);
    }, 200);
  }
};

mobileMenuOpenTrigger.addEventListener("click", (e) => {
  handleOpenMobileMenu(true);
});
mobileMenuCloseTrigger.addEventListener("click", (e) => {
  handleOpenMobileMenu(false);
});
overlay.addEventListener("click", (e) => {
  handleOpenMobileMenu(false);
});

/*** Animate On Scroll */
AOS.init({
  // Global settings:
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 10, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
