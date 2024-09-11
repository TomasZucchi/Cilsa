document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-contrast');
    const contrastStylesheet = document.getElementById('contrast-stylesheet');
    const form = document.getElementById('personalDataForm');

    // Alternar entre modo claro y oscuro
    toggleButton.addEventListener('click', () => {
        if (contrastStylesheet.hasAttribute('disabled')) {
            contrastStylesheet.removeAttribute('disabled');
            toggleButton.textContent = 'Modo claro';
        } else {
            contrastStylesheet.setAttribute('disabled', 'true');
            toggleButton.textContent = 'Modo oscuro';
        }
    });

    // Validación personalizada de Bootstrap
    form.addEventListener('submit', (event) => {
        // Evita el comportamiento predeterminado si el formulario es inválido
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Agrega la clase Bootstrap para mostrar validaciones visuales
        form.classList.add('was-validated');
    }, false);
});