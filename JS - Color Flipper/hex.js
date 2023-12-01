///// items
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Example of the hex color - #f15025

const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

///// adding functionality
btn.addEventListener("click", function () {
  ///// setting a loop
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
  colorName.textContent = hexColor;
});

///// function that creates random hex code
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
