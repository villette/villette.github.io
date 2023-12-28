export const supportedLanguages = ['en', 'fr'];

const path = location.pathname.split('/');
export const currentLanguage = path[1];

if ((!supportedLanguages.includes(currentLanguage))) {
  // Define the fallback language
  let redirectLanguage = 'fr';

  // Try to get a language from the browser settings
  const userLanguage = navigator.language || navigator.userLanguage;

  if (userLanguage !== undefined && supportedLanguages.includes(userLanguage.split('-')[0])) {
    redirectLanguage = userLanguage.split('-')[0];
  }

  window.location.replace(`/${redirectLanguage}`);
}
