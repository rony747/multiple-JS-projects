'use strict';
const hex = [0, 1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('colorBtn');
const currentColor = document.getElementById('currentColor');
const boxHolder = document.querySelector('.boxHolder');
const boxes = document.querySelectorAll('.boxes');
btn.addEventListener('click', genColor);

function genColor() {
  let hexColor = '#';
  let hexarray = [];
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randNum()];
    hexarray.push(hexColor);
  }

  currentColor.innerText = hexColor;

  console.log(hexColor);
}
function randNum() {
  return Math.floor(Math.random() * hex.length);
}
