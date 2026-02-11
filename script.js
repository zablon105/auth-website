const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

// Show login form
loginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
});

// Show register form
registerBtn.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
});

// Toggle links
showRegister.addEventListener('click', () => registerBtn.click());
showLogin.addEventListener('click', () => loginBtn.click());
