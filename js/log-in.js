document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;

    if (email === 'demo@gmail.com' && password === '1234') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please Enter Correct Email or Password');
    }
})