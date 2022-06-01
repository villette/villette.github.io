window.addEventListener('DOMContentLoaded', event => {

  // Initialize Google ReCAPTCHA
  grecaptcha.ready(function () {
    grecaptcha.execute('6LdUEJ4cAAAAAKwpdjNvc1QEw8xYzwYpEqBE4uys', { action: 'contact' }).then(function (token) {
      document.getElementById('captcha-response').value = token;
    });
  });

  // Handle contact form with AJAX
  const contactForm = document.getElementById('contact-form');
  const toastElement = contactForm.querySelector('.toast');
  const toastBody = toastElement.querySelector('.toast-body');

  formcarry({
    form: 'WMrdOCSAvlF',
    element: '#contact-form',
    onSuccess: function (response) {
      toastElement.classList.remove('bg-success', 'bg-danger');
      toastElement.classList.add('bg-success');
      toastBody.innerHTML = toastBody.getAttribute('data-success');

      const toast = new bootstrap.Toast(toastElement);
      toast.show();

      contactForm.querySelector('#contact-form-submit').setAttribute('disabled', 'disabled');
    },
    onError: function (error) {
      toastElement.classList.remove('bg-success', 'bg-danger');
      toastElement.classList.add('bg-danger');
      toastBody.innerHTML = toastBody.getAttribute('data-error');

      const toast = new bootstrap.Toast(toastElement);
      toast.show();

      contactForm.querySelector('#contact-form-submit').setAttribute('disabled', 'disabled');
    }
  });

  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      offset: 74,
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});
