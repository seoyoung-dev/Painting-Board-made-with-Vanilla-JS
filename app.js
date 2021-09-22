let colorsPalette = document.querySelector("#colorsPalette");
const fillBtn = document.querySelector("#fillBtn");
const canvas = document.querySelector("canvas")
fillBtn.addEventListener("click", () => {
  console.log("good");
  function clickHandler(event) {
    canvas.style.backgroundColor = event.target.style.backgroundColor;
  }
  colorsPalette.addEventListener("click",clickHandler)
  return;
});



