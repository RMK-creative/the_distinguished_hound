const hamburger = document.querySelector(".toggle-box");
const modal = document.querySelector(".navbar__modal");

// open & close menu using toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  modal.classList.toggle("active");
  // prevent scroll when menu is open
  if (modal.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// close menu when item clicked
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

// form validation

// const errorMsg = document.querySelector(".contact__form-error");
const input = document.querySelector(".input-email");
const submit = document.querySelector(".form__btn");

const validateForm = (e) => {
  e.preventDefault();
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  errorMsg.classList.remove("active");

  // if (!emailRegExp.test(input.value)) {
  //   errorMsg.classList.add("active");
  // } else {
  //   input.value = "";
  // }
};

function clearInput() {
  input.value = "";
  errorMsg.classList.remove("active");
}

input.addEventListener("click", clearInput);
submit.addEventListener("click", validateForm);

// Gallery

const galleryModal = document.querySelector(".gallery__modal");
const thumbs = document.querySelectorAll(".gallery-set img");
const original = document.querySelector(".gallery__modal-full-img");

thumbs.forEach((thumbs) => {
  thumbs.addEventListener("click", () => {
    galleryModal.classList.add("open");
    original.classList.add("open", "active");
    const originalSrc = thumbs.getAttribute("data-original");
    original.src = `/assets/full/${originalSrc}.jpg`;

    document.body.style.overflow = "hidden";
  });
});

galleryModal.addEventListener("click", (e) => {
  // console.log(`${e.target} was clicked`);
  if (e.target.classList.contains("active")) {
    galleryModal.classList.remove("open");
    original.classList.remove("open", "active");
    original.src = "";
  }
  document.body.style.overflow = "auto";
});

// if (galleryModal.classList.contains("open")) {
//   document.body.style.overflow = "hidden";
// } else {
//   document.body.style.overflow = "auto";
// }
