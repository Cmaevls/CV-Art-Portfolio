const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll(".view-btn");

let current = 0;

buttons.forEach((btn, index) => {

  btn.addEventListener("click", () => {

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

  });

});
