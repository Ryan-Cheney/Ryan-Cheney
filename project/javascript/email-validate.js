document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        document.getElementById('message').innerText = 'Email is valid.';
    } else {
        document.getElementById('message').innerText = 'Email is invalid.';
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}


