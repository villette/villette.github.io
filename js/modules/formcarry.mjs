export default () => {
  const contactForm = document.getElementById('contact-form');
  const toastElement = contactForm.querySelector('.toast');
  const toastBody = toastElement.querySelector('.toast-body');

  formcarry({
    form: 'WMrdOCSAvlF',
    element: '#contact-form',
    onSuccess: (response) => {
      toastElement.classList.remove('bg-success', 'bg-danger');
      toastElement.classList.add('bg-success');
      toastBody.innerHTML = toastBody.getAttribute('data-success');

      const toast = new bootstrap.Toast(toastElement);
      toast.show();

      contactForm.querySelector('#contact-form-submit').setAttribute('disabled', 'disabled');
    },
    onError: (error) => {
      toastElement.classList.remove('bg-success', 'bg-danger');
      toastElement.classList.add('bg-danger');
      toastBody.innerHTML = toastBody.getAttribute('data-error');

      const toast = new bootstrap.Toast(toastElement);
      toast.show();

      contactForm.querySelector('#contact-form-submit').setAttribute('disabled', 'disabled');
    }
  });
};
