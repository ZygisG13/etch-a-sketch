function squaresFormation(squaresNumber) {
  for (let index = 0; index < squaresNumber; index++) {
    const container = document.querySelector("#container");
    const content = document.createElement("div");
    content.classList.add(index);
    container.appendChild(content);
  }
}

const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  let squaresNumber = prompt("Enter the number of squares, max. 100");
  if (squaresNumber > 100) {
    window.alert("Too large number of squares");
  } else {
    squaresFormation(squaresNumber);
  }
});
