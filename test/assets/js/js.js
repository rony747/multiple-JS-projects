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

  document.querySelectorAll(".bmi_scale .column").forEach((el) => {
    el.classList.remove("active");
  });

  if (final < 16) {
    wStatus.innerHTML = "Severe Thinness";
    document.querySelector(".thin1").classList.add("active");
  } else if (final >= 16 && final < 17) {
    wStatus.innerHTML = "Moderate Thinness";
    document.querySelector(".thin2").classList.add("active");
  } else if (final >= 17 && final < 18.5) {
    wStatus.innerHTML = "Mild Thinness";
    document.querySelector(".thin3").classList.add("active");
  } else if (final > 18.5 && final <= 25) {
    wStatus.innerHTML = "Normal";
    document.querySelector(".norm1").classList.add("active");
  } else if (final > 25 && final <= 30) {
    wStatus.innerHTML = "Overweight";
    document.querySelector(".ow1").classList.add("active");
  } else if (final > 30 && final <= 35) {
    wStatus.innerHTML = "Obese Class I";
    document.querySelector(".obs1").classList.add("active");
  } else if (final >= 35 && final <= 40) {
    wStatus.innerHTML = "Mild Thinness";
    document.querySelector(".obs2").classList.add("active");
  } else if (final > 40) {
    wStatus.innerHTML = "Mild Thinness";
    document.querySelector(".obs3").classList.add("active");
  }
}
