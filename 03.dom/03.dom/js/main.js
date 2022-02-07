// function hideTitle() {
//   var h1 = document.querySelector('h1');
//   h1.style.display = 'none'
// }

// function removeTitle() {
//   var h1 = document.querySelector('h1');
//   if (h1) {
//     h1.remove();
//   } else {
//     const h1El = document.createElement('h1');
//     h1El.innerHTML = 'I am new born H1';

//     const dataEl = document.getElementById('data');
//     dataEl.append(h1El);
//     dataEl.innerHTML += '<h3>I am H3</h3>'
//   }

// }
const colors = ['green', 'yellow', 'pink', 'navy', 'blue', 'red', 'black'];
const icons = ['😂', '✅', '😎', '🥸', '🤯', '🤯', '🤯', '🤯'];
function addDivBox() {
  const index = Math.floor(Math.random() * colors.length)
  const data = document.getElementById('data');
  data.innerHTML += `<div onclick="removeElement(event)" onmouseleave="hoverLeft(event)" onmouseover="hoverBox(event)" style="background: ${colors[index]}" class="box-item"><span>${icons[index]}</span></div>`
}

function removeElement(event) {
  event.target.remove();
  console.log(event)
}

function hoverBox(event) {
  const span = event.target.querySelector('span');
  span.style.cssText = "transform: scale(4); transition: 1s;"
}

function hoverLeft(event) {
  const span = event.target.querySelector('span');
  span.style.cssText = "transform: scale(1); transition: 1s;"
}