$(document).ready(function () {
    $("#phone").intlTelInput({
        utilsScript: "path/to/utils.js", // Path to the utils.js file
        initialCountry: "auto", // Auto-detect the user's country
        separateDialCode: true, // Display dial code separately
        nationalMode: false, // Allow users to enter national numbers
        preferredCountries: ["us", "gb", "ng"], // Specify preferred countries
        geoIpLookup: function (callback) {
            // Implement your own GeoIP lookup logic here
        },
        placeholderNumberType: "MOBILE", // Placeholder for mobile numbers
        customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
            return "e.g. " + selectedCountryPlaceholder;
        },
    });
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