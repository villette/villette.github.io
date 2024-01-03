import { Toast } from 'bootstrap';

export default () => {
  const contactForm = document.getElementById('contact-form');

  const onResponse = (response) => {
    const messageType = response?.ok ? 'success' : 'danger';
    const toastElement = contactForm.querySelector('.toast');
    const toastBody = toastElement.querySelector('.toast-body');

    toastElement.classList.remove('bg-success', 'bg-danger');
    toastElement.classList.add(`bg-${messageType}`);
    toastBody.textContent = toastBody.getAttribute(`data-${messageType}`);

    Toast.getOrCreateInstance(toastElement).show();
  };

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('.submit');
    submitButton.setAttribute('disabled', 'disabled');

    fetch(contactForm.action, {
      method: contactForm.method,
      headers: { 'Accept': 'text/html' },
      body: new FormData(contactForm),
    })
    .then(onResponse)
    .catch(onResponse);
  });
};
