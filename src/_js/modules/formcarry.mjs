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

    const contactFormReload = contactForm.querySelector('.reload');
    const contactFormReloadCountdown = contactFormReload.querySelector('.countdown');

    toastElement.classList.remove('bg-success', 'bg-danger');
    toastElement.classList.add(`bg-${messageType}`);
    toastBody.textContent = toastBody.getAttribute(`data-${messageType}`);

    Toast.getOrCreateInstance(toastElement).show();

    contactFormSpinner.classList.add('d-none');
    contactForm.classList.remove('was-validated');

    if (response?.code == 200) {
      contactForm.reset();
    }

    contactFormReload.classList.remove('d-none');

    let seconds = 15;
    contactFormReloadCountdown.textContent = seconds--;

    const countdown = setInterval(() => {
      contactFormReloadCountdown.textContent = seconds--;

      if (seconds < 0) {
        clearInterval(countdown);

        initCaptcha();
        contactFormFieldset.removeAttribute('disabled');
        contactFormReload.classList.add('d-none');
      }
    }, 1000);
  };

  contactForm.addEventListener('submit', (event) => {
    if (!contactForm.checkValidity()) {
      event.preventDefault();
      event.stopImmediatePropagation();

      contactForm.classList.add('was-validated');
    }
  });

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
