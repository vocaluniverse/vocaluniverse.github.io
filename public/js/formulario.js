document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordconfirm = document.getElementById('passwordconfirm').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;

    fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, phone, age })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('usuario', JSON.stringify(data.usuario));
            alert(data.message);
            window.location.href = 'index.html';
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error al registrar:', error);
        alert('Error al registrar. Intente de nuevo.');
    });
});
