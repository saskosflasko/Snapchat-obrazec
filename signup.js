const passwordInput = document.getElementById('password');
const lengthCheck = document.getElementById('length-check');
const uppercaseCheck = document.getElementById('uppercase-check');
const lowercaseCheck = document.getElementById('lowercase-check');
const numberCheck = document.getElementById('number-check');
const passwordError = document.getElementById('password-error');

passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;

    lengthCheck.checked = password.length >= 8;
    uppercaseCheck.checked = /[A-Z]/.test(password);
    lowercaseCheck.checked = /[a-z]/.test(password);
    numberCheck.checked = /[0-9]/.test(password);
});

function validatePassword() {
    if (lengthCheck.checked && uppercaseCheck.checked && lowercaseCheck.checked && numberCheck.checked) {
        passwordError.style.display = 'none';
        return true;
    } else {
        passwordError.style.display = 'block';
        return false;
    }
}

IMask(
    document.getElementById('year'),
    {
      mask: '0000'
    }
  )

  IMask(
    document.getElementById('day'),
    {
      mask: Number,
      min: 1,
      max: 31,
    }
  )
  IMask(
    document.getElementById('year'),
    {
      mask: Number,
      min: 1900,
      max: 2024,
    }
  )