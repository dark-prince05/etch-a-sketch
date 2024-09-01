const container = document.querySelector("#container");

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

createDivs(16);
