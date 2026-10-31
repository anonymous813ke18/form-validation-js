import "./styles.css"
import { createForm  } from "../js/formManager.js"

const form = document.querySelector('form');

createForm();

function validateField (field) {
    const errorMsg = field.parentElement.querySelector('.error-message');

    if (!field.validity.valid) {
        if (field.validity.typeMismatch) {
            errorMsg.textContent = 'Please enter a valid input'
        } else if (field.validity.tooLong) {
            errorMsg.textContent = 'Input is too long'
        } else if (field.validity.tooShort) {
            errorMsg.textContent = 'Input is too short'
        } else if (field.validity.valueMissing) {
            errorMsg.textContent = 'This field is required'
        }

        return false;
    }

    errorMsg.textContent = '';
    return true;
}

form.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    })
})

form.addEventListener ('click', e => {
    if (!e.target.classList.contains('submit-button'))
        return;

    e.preventDefault();

    let isValid = true;

    const fields = form.querySelectorAll('input');

    fields.forEach(field => {
        if (!validateField(field))
            isValid = false;
    });

    if (isValid) {
        form.reset();
    } else {
        form.querySelector(':invalid').focus();
    }
})