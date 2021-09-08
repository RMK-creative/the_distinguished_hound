const hamburger = document.querySelector(".toggle-box");
const modal = document.querySelector(".navbar__modal");

// open & close menu using toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  modal.classList.toggle("active");
});

// close menu when clicked anywhere
document.addEventListener("click", () => {
  if (modal.classList.contains("active")) {
    modal.classList.remove("active")
     }
  }, true);

