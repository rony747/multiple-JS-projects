const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentLength = 1;

next.addEventListener("click", () => {
  currentLength++;
  if (currentLength > circles.length) {
    currentLength = circles.length;
  }

  mainFunc();
});

prev.addEventListener("click", () => {
  currentLength--;
  if (currentLength == 1) {
    currentLength = 1;
  }
  mainFunc();
});

function mainFunc() {
  circles.forEach((circle, index) => {
    if (index < currentLength) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");

  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentLength == 1) {
    prev.disabled = true;
  } else if (currentLength == circles.length) {
    prev.disabled = false;
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
