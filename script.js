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
      div.addEventListener("mousemove", (event) => {
        div.style.backgroundColor = "blue";
      });
      container.appendChild(div);
    }
  }
  container.setAttribute("style", "display:flex; flex-wrap:wrap;");
};

let removeDivs = () => {
  let boxes = Array.from(container.children);
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
