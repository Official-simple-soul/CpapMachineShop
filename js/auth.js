const signupForm = document.querySelector('#signupForm');

const signinForm = document.querySelector('#signinForm');

const errorEl = document.querySelector('#error')

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        errorEl.innerHTML = ''

        const formData = new FormData(event.target);
        const values = Object.fromEntries(formData)
        const errors = validateForm(values);
        if (errors.length > 0) {
            errorEl.innerHTML = 'Fill out all fields';
            return;
        }

        window.location.href = 'login.html'
    });
}

if (signinForm) {
    signinForm.addEventListener("submit", function (event) {
        event.preventDefault();
        errorEl.innerHTML = ''

        const formData = new FormData(event.target);
        const values = Object.fromEntries(formData)
        const errors = validateForm(values);
        if (errors.length > 0) {
            errorEl.innerHTML = 'Fill out all fields';
            return;
        }

        window.location.href = 'bookingpage.html'
    });

}

function validateForm(values) {
    const keys = Object.keys(values);
    let errors = [];
    keys.forEach(item => {
        if (values[item] === '') {
            errors.push(`${item} is required`);
        }
    });

    return errors;
}