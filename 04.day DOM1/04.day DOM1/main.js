function addInfo(e) {
  const data = document.getElementById("data");
  console.log(e.target);
  console.log(data, "dataaaa");
  data.innerHTML += `<div onclick = "removeElement(event)" onmouseleave = "hoverLeft(event)" onmouseover = "hoverBox(event)" id="data"><span>bu yerda text bo'lishi kerak</span></div>`;
}

function removeElement(event) {
  event.target.remove();
  console.log(event);
}

function hoverBox(event) {
  const span = event.target.querySelector("span");
  console.log(span, "spaaan");
  span.style.cssText = "transform: scale(4); transition: 1s;";
}

function hoverLeft(event) {
  const span = event.target.querySelector("span");
  span.style.cssText = "transform: scale(1); transition: 1s;";
}
