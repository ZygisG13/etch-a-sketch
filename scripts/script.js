function squaresFormation(squaresNumber) {
  for (let index = 0; index < squaresNumber; index++) {
    const container = document.querySelector("#container");
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
  }
}

function changeColor() {
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

const squaresButton = document.querySelector("#squaresButton");
//This handler will be executed once the button press. Shows prompt
squaresButton.addEventListener("click", () => {
  let squaresNumber = prompt("Enter the number of squares, max. 100");
  if (squaresNumber > 100) {
    window.alert("Too large number of squares");
  } else {
    squaresFormation(squaresNumber);
  }
  changeColor();
});

const gridButton = document.querySelector("#gridButton");
//This handler catches Grid button and set grind on squares
gridButton.addEventListener("click", (event) => {
  // put borders on divs, using forEach function
  const squares = document.querySelectorAll(".content")
  console.log(squares.forEach)
  squares.forEach((square) => {
    square.style.border = `1px solid black ${event.target.value}`;
  })
});
