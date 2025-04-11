/*
let clickerCount = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
let clickerSpeed = document.getElementById("clicker__speed");
let start

let isClicked = false;

cookie.addEventListener("click", function () {
  clickerCount.textContent = String(Number(clickerCount.textContent) + 1);
  if(Number(clickerCount.textContent) === 1) {
    start = Date.now();
  }

  if(Number(clickerCount.textContent) > 1){
    let end = Date.now()
    clickerSpeed.textContent = String(((Number(clickerCount.textContent))
      / ((end - start) / 1000))
      .toFixed(2))
  }

  if (isClicked) {
    cookie.height = 210;
    cookie.width = 220;
    isClicked = false;
  } else {
    cookie.height = 150;
    cookie.width = 160;
    isClicked = true;
  }
});


*/
const cookie = document.getElementById("cookie");
const counterDisplay = document.getElementById("clicker__counter");
const speedDisplay = document.getElementById("clicker__speed");

let prevTimestamp = Date.now();

cookie.onclick = () => {
  cookie.width = ++counterDisplay.textContent % 2 ? 250 : 200;
  const elapsedTime = (Date.now() - prevTimestamp) / 1000;
  speedDisplay.textContent = (1 / elapsedTime).toFixed(2);
  prevTimestamp = Date.now();
}