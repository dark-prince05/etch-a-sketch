const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resizeBtn");

let createDivs = (num) => {
  let boxSize = Math.floor(500 / num);
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      const div = document.createElement("div");
      div.classList.add("squareBox");
      div.setAttribute(
        "style",
        `flex:1 1 auto;width:${boxSize}px; height:auto; `,
      );
      let opacity = 0.5;
      div.addEventListener("mousemove", () => {
        div.style.opacity = opacity;
        div.style.backgroundColor = color;
      });
      div.addEventListener("mouseout", () => {
        opacity += 0.3;
      });
      container.appendChild(div);
    }
  }
  container.setAttribute("style", "display:flex; flex-wrap:wrap;");
};

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
let color = `rgb(0, 17, 255)`;

let removeDivs = () => {
  let boxes = Array.from(container.children);
  color = getRandomColor();
  boxes.forEach((element) => {
    container.removeChild(element);
  });
};
let size = 16;

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  removeDivs();
  createDivs(size);
});

resizeBtn.addEventListener("click", () => {
  do {
    size = +prompt("Enter a number between 1-100");
  } while (size > 100 || size < 1);
  removeDivs();
  createDivs(size);
});
createDivs(size);
