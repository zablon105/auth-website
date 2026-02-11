const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

const registerPassword = document.getElementById('register-password');
const passwordStrength = document.getElementById('password-strength');
const registerMessage = document.getElementById('register-message');
const loginMessage = document.getElementById('login-message');

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

// Password strength check
registerPassword.addEventListener('input', () => {
    const pwd = registerPassword.value;
    let strength = "Weak";
    let color = "red";

    if (pwd.length >= 8 && /[A-Z]/.test(pwd) && /\d/.test(pwd) && /[!@#$%^&*]/.test(pwd)) {
        strength = "Strong";
        color = "green";
    } else if (pwd.length >= 6) {
        strength = "Medium";
        color = "orange";
    }

    passwordStrength.textContent = `Password strength: ${strength}`;
    passwordStrength.style.color = color;
});

// Simple form validation before submit
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = registerPassword.value.trim();

    if (!name || !email || !password) {
        registerMessage.textContent = "All fields are required!";
    } else if (password.length < 6) {
        registerMessage.textContent = "Password must be at least 6 characters!";
    } else {
        registerMessage.style.color = "green";
        registerMessage.textContent = "Registration successful (mock)!";
        registerForm.reset();
        passwordStrength.textContent = "Password strength: ";
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!email || !password) {
        loginMessage.textContent = "Please fill in all fields!";
    } else {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Login successful (mock)!";
        loginForm.reset();
    }
});
