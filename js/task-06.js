const validationInputEl = document.querySelector('#validation-input');
const dataLengthValue = Number(validationInputEl.dataset.length);

const onInputBlur = event => {
  if (event.currentTarget.value.trim().length === dataLengthValue) {
    validationInputEl.classList.add('valid');
    validationInputEl.classList.remove('invalid');
  } else if (event.currentTarget.value.trim().length === 0) {
    validationInputEl.classList.remove('valid');
    validationInputEl.classList.remove('invalid');
  } else {
    validationInputEl.classList.add('invalid');
    validationInputEl.classList.remove('valid');
  }
};

validationInputEl.addEventListener('blur', onInputBlur);
