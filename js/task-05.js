const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const onInputChange = event => {
  switch (event.currentTarget.value.trim()) {
    case '':
    case ' ':
      nameOutput.textContent = 'Anonymous';
      break;
    default:
      nameOutput.textContent = event.currentTarget.value.trim();
  }
};

nameInput.addEventListener('input', onInputChange);
