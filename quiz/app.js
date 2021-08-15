const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const resultDiv = document.querySelector(".result");
const result = document.querySelector(".display-4");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score++;
    }
  });
  let percent = (score / correctAnswers.length) * 100;
  resultDiv.classList.remove("d-none");

  scrollTo(0, 0);

  let output = 0;
  const timer = setInterval(() => {
    result.textContent = output;
    if (output === percent) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
