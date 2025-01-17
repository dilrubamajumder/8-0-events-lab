// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const colorLists = document.querySelectorAll(".color");
const currentColor = document.querySelector("#current-color");

colorLists.forEach((colorList) => {
  colorList.addEventListener("click", () => {
    currentColor.style.backgroundColor = colorList.style.backgroundColor;
  });
});

const gridCells = document.querySelectorAll("#canvas .cell");

gridCells.forEach((gridCell) => {
  gridCell.addEventListener("click", () => {
    if (gridCell.style.backgroundColor === currentColor.style.backgroundColor) {
      gridCell.style.backgroundColor = "white";
    } else {
      gridCell.style.backgroundColor = currentColor.style.backgroundColor;
    }
  });
});
