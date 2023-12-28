export const supportedLanguages = ['en', 'fr'];

const urlParams = new URLSearchParams(location.search);
export const currentLanguage = urlParams.get('l');

if ((!supportedLanguages.includes(currentLanguage))) {
  // Define the fallback language
  let redirectLanguage = 'fr';

  // Try to get a language from the browser settings
  const userLanguage = navigator.language || navigator.userLanguage;

  if (userLanguage !== undefined && supportedLanguages.includes(userLanguage.split('-')[0])) {
    redirectLanguage = userLanguage.split('-')[0];
  }

  urlParams.set('l', redirectLanguage);
  location.replace(`${location.origin}?${urlParams.toString()}`);
}
