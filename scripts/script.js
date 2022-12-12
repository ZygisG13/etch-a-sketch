const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("one");
container.appendChild(content);

const button = document.querySelector("#btn");
console.log(button)

button.addEventListener("click", () => {
  gridfunkcija(prompt("Enter grid number"));
});
