const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");
let colors = [];
let pickedColor;
let totalSquare = 6;

init();
function init() {
  setUpSquares();
  reset();
}

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add initial colors
    //squares[i].style.background = colors[i];
    //add click listeners
    squares[i].addEventListener("click", function () {
      //grab color of clicked color
      let clickedColor = this.style.background;
      //compare color
      if (clickedColor === pickedColor) {
        changeColors(clickedColor);
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play again?";
        h1.style.background = clickedColor;
      } else {
        this.style.background = "white";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  //generate all new color
  colors = randomColor(totalSquare);
  //pick new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New colors";
  messageDisplay.textContent = "";
  //change color of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "#cb7575";
}

resetButton.addEventListener("click", function () {
  reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color) {
  //loop all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }
}
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function randomColor(num) {
  //make array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    //get random color and push into array
  }
  //return that array
  return arr;
}
function rgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
console.log(colors);
