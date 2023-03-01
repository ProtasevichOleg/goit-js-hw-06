const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const onInputChange = event => {
  nameOutput.textContent =
    event.currentTarget.value === '' || ' '
      ? 'Anonymous'
      : event.currentTarget.value.trim();
};

nameInput.addEventListener('input', onInputChange);
