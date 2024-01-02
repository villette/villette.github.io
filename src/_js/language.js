(() => {
  const userLang = navigator.language || navigator.userLanguage;
  const supportedLangs = ['en', 'fr'];
  let redirectLang = 'fr';

  if (userLang !== undefined && supportedLangs.indexOf(userLang.split('-')[0]) !== -1) {
    redirectLang = userLang.split('-')[0];
  }

  location.replace(`/${redirectLang}/`);
})();
