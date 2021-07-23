window.onload = function () {
  let elements = document.getElementsByTagName("li");
  let screen = document.querySelectorAll("p")[0];
  let clear = document.getElementsByClassName("clear")[0];

  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].innerHTML === "=") {
      elements[i].addEventListener("click", calculate(i));
    } else {
      elements[i].addEventListener("click", addToCurrentValue(i));
    }
  }

  function addToCurrentValue(i) {
    return function () {
      if (elements[i].innerHTML === "÷") {
        screen.innerHTML += "/";
      } else if (elements[i].innerHTML === "x") {
        screen.innerHTML += "*";
      } else {
        screen.innerHTML += elements[i].innerHTML;
      }
    };
  }
  clear.onclick = function () {
    screen.innerHTML = "";
  };
  function calculate(i) {
    return function () {
      screen.innerHTML = eval(screen.innerHTML);
    };
  }
};
/*************************** clock*************************************/

let current_time = function () {
  let noon = 12;
  let clock = document.getElementById("clock");
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";
  if (hours >= noon) {
    meridian = "PM";
  }
  if (hours > noon) {
    hours = hours - 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
  final_time = clock.innerHTML = clockTime;
  return final_time;
};
setInterval(current_time, 1000);
current_time();
/*************************** BMI calculator*************************************/

window.onload = function () {
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let calculate = document.getElementById("calculate");
  let result = document.getElementById("bmi_result");
  let index = document.getElementById("bmi_index");
  calculate.onclick = function () {
    if (height.value == "") {
      result.innerHTML = "please input your height";
    } else if (weight.value == "") {
      result.innerHTML = "please input your weight";
    } else {
      let height_value = height.value;
      let weight_value = weight.value;
      let inMeter = height_value / 100;
      let final_height = inMeter * inMeter;
      let tmp_bmi = weight_value / final_height;
      let final_bmi = tmp_bmi.toFixed(1);
      result.innerHTML = `Your BMI is ${final_bmi} kg/m<sup>3</spu>`;

      if (final_bmi < 16) {
        index.innerHTML = "Severe Thinness";
      } else if (final_bmi > 16 && final_bmi <= 17) {
        index.innerHTML = "Moderate Thinness	";
      } else if (final_bmi > 17 && final_bmi <= 18.5) {
        index.innerHTML = "Mild Thinness	";
      } else if (final_bmi > 18.5 && final_bmi <= 25) {
        index.innerHTML = "Normal";
      } else if (final_bmi > 25 && final_bmi <= 30) {
        index.innerHTML = "Overweight";
      } else if (final_bmi > 30 && final_bmi <= 35) {
        index.innerHTML = "Obese Class I	";
      } else if (final_bmi > 35 && final_bmi <= 40) {
        index.innerHTML = "Obese Class II";
      } else if (final_bmi > 40) {
        index.innerHTML = "Obese Class III";
      }
    }
  };
};
