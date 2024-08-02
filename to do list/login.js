
let login = document.querySelector('.login');
const username = document.getElementById('username');
const password = document.getElementById('password');

login.addEventListener('click', () => {
  if (username.value === 'admin' && password.value === '1234') {
    window.location.href = 'index.html';
  } else {
    alert('login yoki parol notogri');
  }
});
