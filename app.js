const hamburger = document.querySelector(".toggle-box");
const modal = document.querySelector(".navbar__modal");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  modal.classList.toggle("active");
});
