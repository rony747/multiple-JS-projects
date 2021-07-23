const qus = document.getElementsByClassName("question");
const qTitle = document.querySelector(".question-title");
const qCont = document.querySelector(".question-text");
const plusIcon = document.querySelector(".plus-ico");
const minusIcon = document.querySelector(".close-btn");

for (let i = 0; i < qus.length; i++) {
  qus[i].querySelector(".question-btn").addEventListener("click", function () {
    qus[i].classList.toggle("show-text");
  });
}
