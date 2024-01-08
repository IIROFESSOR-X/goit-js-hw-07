function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

function changeBackgroundColor() {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  spanColor.textContent = randomHexColor;
}

button.addEventListener('click', changeBackgroundColor);