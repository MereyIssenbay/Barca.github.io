document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form'); 

    form.addEventListener('submit', function(event) {
        let hasError = false;

        const errorElements = form.querySelectorAll('.error');
        errorElements.forEach(function(errorElement) {
            errorElement.style.display = 'none';
        });

        //Email regex
        const email = form.querySelector('#email');
        const emailError = form.querySelector('#emailError');
        const emailValue = email.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        //If invalid
        if (!emailPattern.test(emailValue)) {
            emailError.style.display = 'block';
            emailError.textContent = 'Valid email is required';
            hasError = true;
        }

        const male = form.querySelector('#male');
        const female = form.querySelector('#female');
        const genderError = form.querySelector('#genderError');
        //If invalid
        if (!male.checked && !female.checked) {
            genderError.style.display = 'block';
            genderError.textContent = 'Gender selection is required';
            hasError = true;
        }

        const message = form.querySelector('textarea');
        const messageError = form.querySelector('#messageError');
        if (message.value.trim() === '') {
            messageError.style.display = 'block';
            messageError.textContent = 'Message is required';
            hasError = true;
        }

        if (hasError) {
            event.preventDefault();
        }
    });
});