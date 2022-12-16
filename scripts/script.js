//This function creates double div's in DOM. Div's number is entered by user
function squaresFormation(squaresNumber) {
  for (let index = 0; index < squaresNumber * squaresNumber; index++) {
    const container = document.querySelector("#container");
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
  }
  squaresOnGrid(squaresNumber);
}

//This function controls how many cells should be in columns, and rows.
function squaresOnGrid(squaresNumber) {
  const squaresAreaFormation = document.querySelector("#container");
  //change #container style in css - DOM
  squaresAreaFormation.style.gridTemplateColumns = `repeat(${squaresNumber}, auto)`;
  squaresAreaFormation.style.gridTemplateRows = `repeat(${squaresNumber}, auto)`;
}

//Let squares turn to black then mouse over
function changeToBlack() {
  const changeColor = document.querySelector("#container");
  // This handler will be executed only once when the cursor
  // moves over the unordered list
  changeColor.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseenter target
      event.target.style.background = "black";
    },
    false
  );
}

//Let squares turn to random rgba then mouse over
function changeColor() {
  const changeColor = document.querySelector("#container");
  // This handler will be executed only once when the cursor
  // moves over the unordered list
  changeColor.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target and call
      event.target.style.background = `${randomRgba()}`;
    },
    false
  );
}

//This function clear all css styles and squares by removing first child from container
function clearSquares() {
  const parent = document.querySelector("#container");
  //This loop checks if child <div> exist, then remove
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  document.querySelector("#container").style.backgroundColor = "aliceblue";
}

//This function return random rgba color
function randomRgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + r().toFixed(1) + ")";
}

const squaresButton = document.querySelector("#squaresButton");
//This handler will be executed once the button press. Shows prompt
squaresButton.addEventListener("click", () => {
  let squaresNumber = prompt("Enter the number of squares, max. 100");
  if (squaresNumber > 100) {
    window.alert("Too large number of squares");
  } else {
    squaresFormation(squaresNumber);
  }
});

const gridButton = document.querySelector("#gridButton");
//This handler catches Grid button and set grid on squares
gridButton.addEventListener("click", (event) => {
  // put borders on div's, using forEach function
  const squares = document.querySelectorAll(".content");
  squares.forEach((square) => {
    square.style.border = `0.5px groove ${event.target.value}`;
  });
});

const rgbColor = document.querySelector("#colorButton");
//This handler catches Random RGB Color button
rgbColor.addEventListener("click", (event) => {
  //called function
  changeColor();
});

const blackColor = document.querySelector("#blackColorButton");
//This handler catches Black Color button
blackColor.addEventListener("click", (event) => {
  //called function
  changeToBlack();
});

const clear = document.querySelector("#clearButton");
//This handler catches Clear button
clear.addEventListener("click", (event) => {
  //called function
  clearSquares();
});
