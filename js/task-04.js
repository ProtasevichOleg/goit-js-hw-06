const counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

incrementBtn.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});
