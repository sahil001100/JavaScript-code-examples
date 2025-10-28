const form = document.getElementById('loginForm');
const username = document.querySelector('input[name="username"]');
const password = document.querySelector('input[name="password"]');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('mouseover', () => {
  const isUsernameEmpty = username.value.trim() === '';
  const isPasswordEmpty = password.value.trim() === '';

  if (isUsernameEmpty || isPasswordEmpty) {
    submitBtn.classList.toggle('move');
  } else {
    submitBtn.classList.remove('move');
  }
});