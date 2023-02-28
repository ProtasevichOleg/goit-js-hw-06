function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector('.widget');
const colorEl = widgetEl.querySelector('.color');
const changeColorButtonEl = widgetEl.querySelector('.change-color');

changeColorButtonEl.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorEl.textContent = newColor;
});
