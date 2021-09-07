const hamburger = document.querySelector(".toggle-box");
const modal = document.querySelector(".navbar__modal");

// open & close menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  modal.classList.toggle("active");
});

// menu to close when user scrolls
// document.onscroll = (e) => {
//     if (e.target.id !== "toggle-box" && e.target.id !== "navbar__modal") {
//       hamburger.classList.remove("open");
//       modal.classList.remove("active");
//     }
//   };


  // sticky nav
// const navbar = document.querySelector('.navbar');
// let sticky = navbar.offsetTop;
// const navbarScroll = () => {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add('sticky')
//   } else {
//     navbar.classList.remove('sticky');
//   }
// };

// window.onscroll = navbarScroll;
