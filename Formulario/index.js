document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-contrast');
    const contrastStylesheet = document.getElementById('contrast-stylesheet');
    const form = document.getElementById('personalDataForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');

    toggleButton.addEventListener('click', () => {
        if (contrastStylesheet.disabled) {
            contrastStylesheet.disabled = false;
            toggleButton.textContent = 'Modo claro';
        } else {
            contrastStylesheet.disabled = true;
            toggleButton.textContent = 'Modo oscuro';
        }
    });

    form.addEventListener('submit', (event) => {
        const emailValue = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const namePattern = /^[A-Za-z\s]+$/;

        let valid = true;

        if (!emailPattern.test(emailValue)) {
            emailError.textContent = 'Por favor, ingrese un email válido.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        if (!namePattern.test(firstNameInput.value)) {
            firstNameError.textContent = 'El nombre solo debe contener letras y espacios.';
            valid = false;
        } else {
            firstNameError.textContent = '';
        }

        if (!namePattern.test(lastNameInput.value)) {
            lastNameError.textContent = 'El apellido solo debe contener letras y espacios.';
            valid = false;
        } else {
            lastNameError.textContent = '';
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});