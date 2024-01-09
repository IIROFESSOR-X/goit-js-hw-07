const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = parseInt(input.value);
  
  if (amount >= 1 && amount <= 100) {
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      
      fragment.appendChild(div);
    }
    
    boxesContainer.innerHTML = '';
    boxesContainer.appendChild(fragment);
    input.value = '';
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}