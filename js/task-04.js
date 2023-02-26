const counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onDecrementBtnClick = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

const onIncrementBtnClick = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);
