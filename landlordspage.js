
// form-validation
function validateForm() {
    console.log('Form submitted'); // Check if the function is being called

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var city = document.getElementById('city');
    var areas = document.getElementById('areas');


    console.log('Name:', name.value);
    console.log('Email:', email.value);
    console.log('Phone:', phone.value);
    console.log('City:', city.value);
    console.log('Areas:', areas.value);

    if (name.value.trim() === '') {
        alert('Name is required');
        return false;
    }

    if (email.value.trim() === '' || !isValidEmail(email.value.trim())) {
        alert('Valid email is required');
        return false;
    }

    if (phone.value.trim() === '' || !isValidPhoneNumber(phone.value.trim())) {
        alert('Valid phone number is required');
        return false;
    }

    if (city.value.trim() === '') {
        alert('City is required');
        return false;
    }

    if (areas.value.trim() === '') {
        alert('Areas is required');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    // Add your email validation logic here
    return true;
}

function isValidPhoneNumber(phone) {
    // Add your phone number validation logic here
    return true;
}



// footer validation
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
//end validation