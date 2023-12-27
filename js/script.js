window.addEventListener('DOMContentLoaded', () => {

  // Generate mailto link
  import('./modules/mailto.mjs').then(mailto => mailto.default());

  // Initialize Google ReCAPTCHA
  import('./modules/captcha.mjs').then(captcha => captcha.default());

  // Handle contact form with AJAX
  import('./modules/formcarry.mjs').then(formcarry => formcarry.default());

  // Activate Bootstrap scrollspy on the main nav element
  import('./modules/scrollspy.mjs').then(scrollspy => scrollspy.default());

  // Collapse responsive navbar when toggler is visible
  import('./modules/navbar.mjs').then(navbar => navbar.default());

});
