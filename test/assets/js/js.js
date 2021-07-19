const hFeet = document.querySelector("#hFeet");
const hInch = document.querySelector("#hInch");
const wKg = document.querySelector("#wKg");
const submit = document.querySelector("#submit");
const result = document.querySelector("#result_area");

submit.addEventListener("click", bmiFunc);

function bmiFunc(event) {
  event.preventDefault();
  const height = hFeet.value * 0.3048 + hInch.value * 0.0254;
  const weight = wKg.value;
  const final = weight / Math.pow(height, 2);

  result.innerHTML = final.toFixed(2);
}
