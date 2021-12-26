let elInput = document.querySelector('.input');
let elButton = document.querySelector('.button');
let elBox = document.querySelector('.box');
let value = '';

elInput.addEventListener('keyup', (e) => {
  e.preventDefault;
  value = elInput.value;
})

elButton.addEventListener('click', () => {
  elBox.append(value)
  elInput.value = ''
})

