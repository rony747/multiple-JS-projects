window.onload = function () {
  let seconds = 00;
  let tens = 00;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");
  let Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
/******** count down *********** */

window.onload = function () {
  let timer_old = "11";
  let timer = document.getElementById("timer");
  let start_btn = document.getElementById("start");
  start_btn.addEventListener("click", startCount);
  function startCount() {
    let time = setInterval(counter, 1000);
    function counter() {
      timer_old--;
      timer.innerHTML = timer_old;
      if (timer_old <= 0) {
        clearInterval(time);
        timer.innerHTML = timer_old + "<br>Your time is over";
      }
    }
  }
};
