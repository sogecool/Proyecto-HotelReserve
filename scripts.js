function showLoginPage() {
    document.getElementById('explore-page').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
}

function showExplorePage() {
    document.getElementById('explore-page').classList.remove('hidden');
    document.getElementById('login-page').classList.add('hidden');
}

function redirectToRegister() {
    window.location.href = 'register.html';
}

function redirectToLogin() {
    window.location.href = 'index.html';
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === '' || password === '') {
        alert('Por favor, ingrese su correo electrónico y contraseña.');
    } else {
        alert('Inicio de sesión exitoso.');
        // Aquí iría la lógica para manejar el inicio de sesión real.
    }
}

function createAccount() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === '' || password === '') {
        alert('Por favor, ingrese su correo electrónico y contraseña.');
    } else {
        alert('Cuenta creada exitosamente.');
        // Aquí iría la lógica para manejar la creación de una cuenta real.
    }
}

function forgotPassword() {
    const email = document.getElementById('email').value;
    
    if (email === '') {
        alert('Por favor, ingrese su correo electrónico.');
    } else {
        alert('Enlace para restablecer la contraseña enviado.');
        // Aquí iría la lógica para manejar el restablecimiento de contraseña real.
    }
}

function showSettings() {
    alert('Settings functionality to be implemented.');
}

function register() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (fullname === '' || email === '' || password === '') {
        alert('Por favor, llene todos los campos.');
    } else {
        alert('Cuenta creada exitosamente.');
        // Aquí iría la lógica para manejar la creación de una cuenta real.
    }
}
