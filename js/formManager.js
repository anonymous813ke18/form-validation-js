const body = document.querySelector('body');

function createForm () {
    const form = document.querySelector('form');

    const spanTemplate = document.createElement('span');
    spanTemplate.classList.add('error-message');

    // Setting input for email address
    const formRowOne = document.createElement('div');
    formRowOne.classList.add('form-row');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';
    formRowOne.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('minlength', '12');
    emailInput.setAttribute('placeholder', 'example@yopmail.com');
    emailInput.setAttribute('data-error', 'Please enter a valid Email Address');
    // emailInput.setAttribute('pattern', '^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')
    emailInput.required = true;
    formRowOne.appendChild(emailInput);

    formRowOne.appendChild(spanTemplate.cloneNode(true));

    form.appendChild(formRowOne);

    // Setting input for Country
    const formRowTwo = document.createElement('div');
    formRowTwo.classList.add('form-row');

    const countryLabel = document.createElement('label');
    countryLabel.setAttribute('for', 'country');
    countryLabel.textContent = 'Country:';
    formRowTwo.appendChild(countryLabel);

    const countryInput = document.createElement('input');
    countryInput.setAttribute('type', 'text');
    countryInput.setAttribute('name', 'country');
    countryInput.setAttribute('id', 'country');
    countryInput.setAttribute('placeholder', 'India');
    countryInput.required = true;
    formRowTwo.appendChild(countryInput);

    formRowTwo.appendChild(spanTemplate.cloneNode(true));

    form.appendChild(formRowTwo);

    // Setting input for Postal Code
    const formRowThree = document.createElement('div');
    formRowThree.classList.add('form-row');

    const postalCodeLabel = document.createElement('label');
    postalCodeLabel.setAttribute('for', 'postal-code');
    postalCodeLabel.textContent = 'Postal Code:';
    formRowThree.appendChild(postalCodeLabel);

    const postalCodeInput = document.createElement('input');
    postalCodeInput.setAttribute('type', 'number');
    postalCodeInput.setAttribute('name', 'postal-code');
    postalCodeInput.setAttribute('id', 'postal-code');
    postalCodeInput.setAttribute('placeholder', '400076');
    postalCodeInput.required = true;
    formRowThree.appendChild(postalCodeInput);

    formRowThree.appendChild(spanTemplate.cloneNode(true));

    form.appendChild(formRowThree);

    // Setting input for Password
    const formRowFour = document.createElement('div');
    formRowFour.classList.add('form-row');

    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'Password:';
    formRowFour.appendChild(passwordLabel);

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');
    passwordInput.setAttribute('id', 'password');
    passwordInput.setAttribute('placeholder', 'abcd@1234');
    passwordInput.setAttribute('minlength', '8');
    passwordInput.required = true;
    formRowFour.appendChild(passwordInput);

    formRowFour.appendChild(spanTemplate.cloneNode(true));

    form.appendChild(formRowFour);

    // Setting input for Confirm Password
    const formRowFive = document.createElement('div');
    formRowFive.classList.add('form-row');

    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.setAttribute('for', 'confirm-password');
    confirmPasswordLabel.textContent = 'Confirm Password:';
    formRowFive.appendChild(confirmPasswordLabel);

    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.setAttribute('type', 'password');
    confirmPasswordInput.setAttribute('name', 'confirm-password');
    confirmPasswordInput.setAttribute('id', 'confirm-password');
    confirmPasswordInput.setAttribute('placeholder', 'abcd@1234');
    confirmPasswordInput.setAttribute('minlength', '8');
    confirmPasswordInput.required = true;
    formRowFive.appendChild(confirmPasswordInput);

    formRowFive.appendChild(spanTemplate.cloneNode(true));

    form.appendChild(formRowFive);

    // Setting the submit button
    const formRowSix = document.createElement('div');
    formRowSix.classList.add('form-row');   
    
    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.textContent = 'Submit';
    formRowSix.appendChild(submitButton);

    form.appendChild(formRowSix);
    
    body.appendChild(form);
}

export { createForm }