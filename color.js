let colors = [
  "rgb(255, 0, 0)", // red
  "rgb(255, 255, 0)", // yellow
  "rgb(0, 255, 0)", // lime
  "rgb(0, 255, 255)", // cyan/aqua
  "rgb(0, 0, 255)", // blue
  "rgb(255, 0, 255)", // magenta
];

const squares = document.querySelectorAll(".square"); // NodeList(6)

let pickedColor = colors[3];
document.getElementById("colorDisplay").innerHTML = pickedColor;

const message = document.getElementById("correctOrNot");

for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function () {
    let clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      message.innerHTML = "Correct!! :)";
      changeColors(pickedColor);
    } else {
      this.style.background = "#232323";
      message.textContent = "Try Again!";
    }
  });
}
const changeColors = (color) => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
};
