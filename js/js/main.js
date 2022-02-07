const input = document.getElementById('body_input')
const btn = document.getElementById('body_btn')
const span = document.getElementById('body_span')

btn.addEventListener("click", function() {
    input.click();
});

input.addEventListener("change", function() {
  if (input.value){
      span.innerHTML = input.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else {
      span.innerHTML = "no file chosen yet";
  }
});



// localStorage
const inpKey = document.getElementById('inputKey');
const inpValue = document.getElementById('inputValue');
const btnInsert = document.getElementById('btnInsert');
const isOutput = document.getElementById('isOutput');

btnInsert.onclick = function() {
    const key = inpKey.value
    const value = inpValue.value


    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    isOutput.innerHTML += `<p>${key}: ${value}<button onclick="">X</button></p>`;

};

function removeItem(key){
    localStorage.removeItem();
};