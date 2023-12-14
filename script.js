let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let pickedColor = pickColor();
let clickedColor;

// Elements
const squares = document.querySelectorAll(".square");
const h1 = document.querySelector("h1");
const spanDisplay = document.querySelector("#colorDisplay");
const spanMje = document.querySelector("#message");
const reset = document.querySelector("#reset");
const easyButton = document.querySelector("#easyBtn");
const hardButton = document.querySelector("#hardBtn");
const selectedBoton = document.querySelector(".selected");

//Random colors
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}
//Colors array
function generateRandomColors(numberOfSquares) {
  let array = [];
  for (let i = 0; i < numberOfSquares; i++) {
    array.push(randomColor());
  }
  return array;
}
//Asign random color
function pickColor() {
  random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
//Asign same color to squares
function changeColors(color) {
  for (let j = 0; j < squares.length; j++) {
    squares[j].style.backgroundColor = color;
  }
}

//Reset game & colors
function resetGame() {
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  spanDisplay.textContent = pickedColor;
  reset.textContent = "New Colors";
  h1.style.backgroundColor = "#4059AD";
  spanMje.textContent = "Let's play!";
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function (evento) {
      clickedColor = this.style.backgroundColor;
      if (pickedColor == clickedColor) {
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        reset.textContent = "Play again?";
      }
    });
  }
}

// Selection buttons
easyButton.addEventListener("click", function () {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  h1.style.backgroundColor = "#4059AD";
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    pickedColor = pickColor();
    spanDisplay.textContent = pickedColor;
    if (colors[i] != undefined) {
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardButton.addEventListener("click", function () {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  h1.style.backgroundColor = "#4059AD";
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    pickedColor = pickColor();
    spanDisplay.textContent = pickedColor;
    squares[i].style.display = "block";
  }
});

function game() {
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function (evento) {
      clickedColor = this.style.backgroundColor;
      if (pickedColor == clickedColor) {
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        spanMje.textContent = "Correct!";
        reset.textContent = "Play again?";
      } else {
        squares[i].style.backgroundColor = "#4059AD";
        spanMje.textContent = "Tray again!";
      }
    });
  }
}

game();
reset.addEventListener("click", resetGame);
generateRandomColors(numberOfSquares);
pickColor();
spanDisplay.textContent = pickedColor;
