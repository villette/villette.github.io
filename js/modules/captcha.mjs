export default () => {
  const siteKey = '6LdUEJ4cAAAAAKwpdjNvc1QEw8xYzwYpEqBE4uys';

  grecaptcha.ready(() => {
    grecaptcha.execute(siteKey, { action: 'contact' }).then((token) => {
      document.getElementById('captcha-response').value = token;
    });
  });
};
