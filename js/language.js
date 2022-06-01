var userLang = navigator.language || navigator.userLanguage;
var redirectLang = 'fr';

if (userLang !== undefined) {
  var supportedLangs = ['en', 'fr'];

  if (supportedLangs.indexOf(userLang.split('-')[0]) !== -1) {
    redirectLang = userLang.split('-')[0];
  }
}

window.location.replace('/' + redirectLang + '/');
