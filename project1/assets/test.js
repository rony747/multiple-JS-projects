let boxs = document.getElementsByClassName("boxs");
for (let i = 0; i < boxs.length; i++) {
  boxs[i].addEventListener("mouseenter", mInFunc);
  boxs[i].addEventListener("mouseout", mOutFunc);

  function mInFunc() {
    boxs[i].style.width = "300px";
    boxs[i].style.height = "300px";
  }

  function mOutFunc() {
    boxs[i].style.width = "150px";
    boxs[i].style.height = "150px";
  }
}

/***************** */
