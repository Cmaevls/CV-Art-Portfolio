const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll(".next-btn");

let current = 0;

buttons.forEach(button => {

  button.addEventListener("click", () => {

    slides[current].classList.remove("active");
    slides[current].classList.add("prev");

    current++;

    if(current >= slides.length){
      current = 0;
    }

    slides.forEach(slide => {

      if(!slide.classList.contains("active")){
        slide.classList.remove("prev");
      }

    });

    slides[current].classList.add("active");

  });

});
