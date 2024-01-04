import { Toast } from 'bootstrap';
import initCaptcha from './captcha.mjs';

export default () => {
  const contactForm = document.getElementById('contact-form');
  const contactFormFieldset = contactForm.querySelector('fieldset');
  const contactFormSpinner = contactForm.querySelector('.spinner');

  const onResponse = (response) => {
    const messageType = response?.code == 200 ? 'success' : 'danger';
    const toastElement = contactForm.querySelector('.toast');
    const toastBody = toastElement.querySelector('.toast-body');

    toastElement.classList.remove('bg-success', 'bg-danger');
    toastElement.classList.add(`bg-${messageType}`);
    toastBody.textContent = toastBody.getAttribute(`data-${messageType}`);

    Toast.getOrCreateInstance(toastElement).show();

    contactFormSpinner.classList.add('d-none');

    if (response?.code == 200) {
      contactForm.reset();

      initCaptcha();
      contactFormFieldset.removeAttribute('disabled');
    } else {
      setTimeout(() => {
        initCaptcha();
        contactFormFieldset.removeAttribute('disabled');
      }, 15000);
    }
  };

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(contactForm.action, {
      method: contactForm.method,
      headers: { 'Accept': 'application/json' },
      body: new FormData(contactForm),
    })
    .then(response => response.json())
    .then(onResponse)
    .catch(onResponse);

    contactFormFieldset.setAttribute('disabled', 'disabled');
    contactFormSpinner.classList.remove('d-none');
  });
};
