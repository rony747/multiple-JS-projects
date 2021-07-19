const hFeet = document.querySelector("#hFeet");
const hInch = document.querySelector("#hInch");
const wKg = document.querySelector("#wKg");
const submit = document.querySelector("#submit");
const result = document.querySelector("#result_area");
const wStatus = document.querySelector("#wst");

submit.addEventListener("click", bmiFunc);

function bmiFunc(event) {
  event.preventDefault();
  const height = hFeet.value * 0.3048 + hInch.value * 0.0254;
  const weight = wKg.value;
  const calculation = weight / Math.pow(height, 2);
  const final = calculation.toFixed(2);

  result.innerHTML = final;

  if (final < 16) {
    wStatus.innerHTML = "Severe Thinness";
    document.querySelector(".clm_thin .class1").classList.add("active");
  }
  if (final >= 16 && final < 17) {
    wStatus.innerHTML = "Moderate Thinness";
    document.querySelector(".clm_thin .class2").classList.add("active");
  }
  if (final >= 17 && final < 18.5) {
    wStatus.innerHTML = "Mild Thinness";
    document.querySelector(".clm_thin .class3").classList.add("active");
  }
}
