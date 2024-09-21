document.getElementById('btn-login').addEventListener('click', function(event) {
    event.preventDefault(); 

    // Get the phone no and pin to validate
    const phoneNumber = getInputFieldValueById('login-phone');
    const pinNumber = getInputFieldValueById('login-pin');

    // Temporary validating function: not recommended for professional use
    if (String(phoneNumber) === '123456789' && String(pinNumber) === '1234') {
        this.onclick = window.location.replace('../home.html');
        // window.location.href can be used too.
    } else {
        alert('Invalid pin or phone number!');
    }
})