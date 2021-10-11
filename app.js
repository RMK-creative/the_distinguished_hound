const hamburger = document.querySelector(".toggle-box");
const modal = document.querySelector(".navbar__modal");

// open & close menu using toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  modal.classList.toggle("active");
  // prevent scroll when menu is open
  if (modal.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  }
});

// close menu when clicked anywhere
modal.addEventListener(
  "click",
  () => {
    // allow scroll after link is clicked
    document.body.style.overflow = "auto";
    if (modal.classList.contains("active")) {
      modal.classList.remove("active");
      hamburger.classList.toggle("open");
    }
  },
  true
);
