function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesContainerEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxSize = 30;
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${boxSize + i * 10}px`;
    newBox.style.height = `${boxSize + i * 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesArray.push(newBox);
  }
  boxesContainerEl.append(...boxesArray);
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = '';
}

createBtnEl.addEventListener('click', () => {
  const amount = inputEl.value;
  createBoxes(amount);
});

destroyBtnEl.addEventListener('click', destroyBoxes);
