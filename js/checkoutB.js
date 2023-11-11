document.addEventListener("DOMContentLoaded", function () {
    var openModalBtn = document.getElementById("openModalBtn");
    const selectField = document.getElementById('selectfield');
    const loader = document.querySelector('.load');
    const errorMessage = document.querySelector('.text-danger');
    var modal = document.getElementById("myModal");
    let firstName = document.querySelector('.firstNameInput');
    let lastName = document.querySelector('.lastNameInput');
    let textFirstName = document.querySelector('.input-name');
    openModalBtn.disabled = true;
    openModalBtn.style.cursor = "not-allowed";


    selectField.addEventListener('change', () => {
        if (selectField.value != "") {
            openModalBtn.disabled = false;
            openModalBtn.style.cursor = "pointer";
            errorMessage.style.display = "none";
        }
    })

    openModalBtn.onclick = function () {
        textFirstName.innerHTML = firstName.value+ " " +lastName.value;

        setTimeout(function () {
            modal.style.display = "block";
        }, 3000);
        loader.style.display = "block";

        setTimeout(function () {
            loader.style.display = "none";

            modal.style.display = "block";
        }, 3000);
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            window.location.href = "./index.html";
        }
    }
});



(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
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