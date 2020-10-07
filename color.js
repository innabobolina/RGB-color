const squares = document.querySelectorAll(".square"); // NodeList(6)
let numSquares = 6;
let colors = generateRandomColors(numSquares);
// [
//   "rgb(255, 0, 0)", // red
//   "rgb(255, 255, 0)", // yellow
//   "rgb(0, 255, 0)", // lime
//   "rgb(0, 255, 255)", // cyan/aqua
//   "rgb(0, 0, 255)", // blue
//   "rgb(255, 0, 255)", // magenta
// ]

let pickedColor = pickColor();
document.getElementById("colorDisplay").innerHTML = pickedColor;

const message = document.getElementById("correctOrNot");
const colorDisplay = document.getElementById("colorDisplay");
const resetButton = document.querySelector("#reset");
const easyButton = document.querySelector("#easy");
const hardButton = document.querySelector("#hard");

easyButton.addEventListener("click", () => {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  colorDisplay.style.background = "#232323";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else squares[i].style.display = "none";
  }
});
hardButton.addEventListener("click", () => {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  colorDisplay.style.background = "#232323";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", () => {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  colorDisplay.style.background = "#232323";
});

for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function () {
    let clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      message.innerHTML = "Correct!!! :)";
      resetButton.textContent = "Play Again?";
      changeColors(pickedColor);
      colorDisplay.style.background = pickedColor;
    } else {
      this.style.background = "#232323";
      message.textContent = "Try Again!";
    }
  });
}
function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  // pick 3 numbers ('r', 'g', and 'b') from 0 to 255:
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
