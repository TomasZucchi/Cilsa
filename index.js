document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-contrast');
    const contrastStylesheet = document.getElementById('contrast-stylesheet');
    const form = document.getElementById('personalDataForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

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

        if (!emailPattern.test(emailValue)) {
            emailError.textContent = 'Por favor, ingrese un email válido.';
            event.preventDefault(); 
        } else {
            emailError.textContent = '';
        }
    });
});