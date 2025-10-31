const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const usernameFeedback = document.getElementById('usernameFeedback');
    const emailFeedback = document.getElementById('emailFeedback');
    const passwordFeedback = document.getElementById('passwordFeedback');

    function validateUsername() {
      const isValid = username.value.trim().length >= 3;
      updateFeedback(username, usernameFeedback, isValid);
    }

    function validateEmail() {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = pattern.test(email.value.trim());
      updateFeedback(email, emailFeedback, isValid);
    }

    function validatePassword() {
      const isValid = password.value.trim().length >= 6;
      updateFeedback(password, passwordFeedback, isValid);
    }

    function updateFeedback(input, feedback, isValid) {
      input.classList.toggle('valid', isValid);
      input.classList.toggle('invalid', !isValid);
      feedback.classList.toggle('visible', !isValid);
    }

    username.addEventListener('input', validateUsername);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);

    document.getElementById('signupForm').addEventListener('submit', e => {
      validateUsername();
      validateEmail();
      validatePassword();

      if (
        username.classList.contains('invalid') ||
        email.classList.contains('invalid') ||
        password.classList.contains('invalid')
      ) {
        e.preventDefault(); // prevent submission if any field is invalid
      }
    });