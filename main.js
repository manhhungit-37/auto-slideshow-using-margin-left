const listSlide = document.getElementsByClassName("slide");
const slides = document.querySelector(".slides");
const listDot = document.getElementsByClassName("dot");
let currentSlide = 1;

function display(index) {
  clearTimeout(times);
  const slidesLength = listSlide.length;
  if (index >= slidesLength) {
    index = 0;
  }
  currentSlide = index;
  slides.classList.add(`active-${index}`);
  for (let i = 0; i < slidesLength; i++) {
    if (i !== index) {
      slides.classList.remove(`active-${i}`);
      listDot[i].classList.remove("dot-hover");
    }
    else {
      listDot[i].classList.add("dot-hover");
    }
  }
  currentSlide++;
  times = setTimeout(() => display(currentSlide), 4000);
}

let times = setTimeout(() => display(currentSlide), 4000);