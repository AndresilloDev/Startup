document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificar las credenciales (puedes modificar esto según tus necesidades)
        if (username === 'usuario' && password === 'contraseña') {
            // Almacenar el nombre de usuario en el almacenamiento local
            localStorage.setItem('username', username);

            // Redirigir a la página principal
            window.location.href = 'index.html';
        } else {
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    });

    // Mostrar el nombre de usuario en el área de navegación superior si está almacenado en el almacenamiento local
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        const userSpan = document.getElementById('user-name');
        if (userSpan) {
            userSpan.textContent = storedUsername;
        }
    }
});
