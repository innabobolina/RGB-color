let numSquares = 6;
let colors = [];

// let colors = generateRandomColors(numSquares);
// [
//   "rgb(255, 0, 0)", // red
//   "rgb(255, 255, 0)", // yellow
//   "rgb(0, 255, 0)", // lime
//   "rgb(0, 255, 255)", // cyan/aqua
//   "rgb(0, 0, 255)", // blue
//   "rgb(255, 0, 255)", // magenta
// ]

const squares = document.querySelectorAll(".square"); // NodeList(6)
const message = document.getElementById("correctOrNot");
const colorDisplay = document.getElementById("colorDisplay");
const h2 = document.querySelector("h2");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

let pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (let button of modeButtons) {
    button.addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    // squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        message.innerHTML = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(pickedColor);
        h2.style.background = pickedColor;
      } else {
        this.style.background = "#232323";
        message.textContent = "Wrong";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  resetButton.textContent = "New Colors";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else squares[i].style.display = "none";
  }
  h2.style.background = "#232323";
}

resetButton.addEventListener("click", () => {
  reset();
});

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
