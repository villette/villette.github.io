import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageLink({ language, isActive, isNotLast, setCurrentLanguage }) {
  const { t, i18n } = useTranslation();

  if (isActive) {
    return (
      <Fragment>
        <span className='nav-link d-inline text-white'>{language.toUpperCase()}</span>
        {isNotLast && '/'}
      </Fragment>
    )
  }

  const handleTranslation = (event, language) => {
    event.preventDefault();

    const storageKey = i18n.options.detection.lookupLocalStorage;
    localStorage.setItem(storageKey, language);

    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <Fragment>
      <span className='nav-link d-inline' role='button' onClick={(event) => handleTranslation(event, language)}>{language.toUpperCase()}</span>
      {isNotLast && '/'}
    </Fragment>
  )
}
