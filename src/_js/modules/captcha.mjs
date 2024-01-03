import { load } from 'recaptcha-v3';

export default () => {
  const siteKey = '6LdUEJ4cAAAAAKwpdjNvc1QEw8xYzwYpEqBE4uys';

  load(siteKey).then((recaptcha) => {
    recaptcha.execute('contact').then((token) => {
      document.getElementById('captcha-response').value = token;
    })
  })
};
