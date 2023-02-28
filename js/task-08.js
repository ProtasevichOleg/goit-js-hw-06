const loginFormEl = document.querySelector('.login-form');

const onSubmitBtnClick = event => {
  event.preventDefault();

  const { email, password } = loginFormEl.elements;

  if (!email.value || !password.value) alert('Всі поля мають бути заповнені');

  const user = {
    email: email.value,
    password: password.value,
  };

  console.log(user);
  loginFormEl.reset();
};

loginFormEl.addEventListener('submit', onSubmitBtnClick);
