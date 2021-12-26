let items = ['red', 'green', 'yellow', 'blue', 'white'];

let elItem = document.querySelectorAll('.item');
let elList = document.querySelector('.list');

for (let i = 0; i < elItem.length; i++) {
  elItem[i].style.backgroundColor = items[i]
}

let a = true;

function isKeyPressed(event) {
  if (event.shiftKey && a == true) {
    elList.style.display = 'flex';
    a = false;
  } else if (a == false) {
    elList.style.display = 'none'
    a = true;
  }
}

function isKey(event) {
  if (event.isKey === 1) {
    console.log(6456);
  }
} 


























