function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Putosi' && password === 'Putosimics') {
        window.location.href = 'TAB.html';
    } else {
        alert('Nesprávné jméno nebo heslo.');
    }
}
