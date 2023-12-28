import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import About from './About';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Navigation from './Navigation';
import Section from './Section';
import Skills from './Skills';

import '../styles/styles.scss';

export default function App() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.resolvedLanguage);
  const supportedLanguages = Object.keys(i18n.options.resources);

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage;
    document.title = t('layout.title');

    const descriptionElement = document.querySelector('meta[name="description"]');
    descriptionElement.setAttribute('content', t('layout.description'));

    const ogTitleElement = document.querySelector('meta[property="og:title"]');
    ogTitleElement.setAttribute('content', t('layout.title'));

    const ogLocaleElement = document.querySelector('meta[property="og:locale"]');
    ogLocaleElement.setAttribute('content', i18n.resolvedLanguage);

    const ogDescriptionElement = document.querySelector('meta[property="og:description"]');
    ogDescriptionElement.setAttribute('content', t('layout.description'));
  }, [currentLanguage]);

  return (
    <>
      <Navigation
        links={t('navigation')}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        supportedLanguages={supportedLanguages}
      />

      <div className='container-fluid p-0'>
        <Section id='about'>
          <About />
        </Section>

        <hr className='m-0' />

        <Section id='experience' title={t('experience.title')}>
          {t('experience.work').map((item, index) => (
            <Experience key={index} {...item} />
          ))}
        </Section>

        <hr className='m-0' />

        <Section id='education' title={t('education.title')}>
          {t('education.diplomas').map((item, index) => (
            <Education key={index} {...item} />
          ))}
        </Section>

        <hr className='m-0' />

        <Section id='skills' title={t('skills.title')}>
          {t('skills.groups').map((item, index) => (
            <Skills key={index} {...item} />
          ))}
        </Section>

        <hr className='m-0' />

        <Section id='interests' title={t('interests.title')}>
          {t('interests.lines').map((item, index) => (
            <p key={index} className={index === t('interests.lines').length - 1 ? 'mb-0' : null}>{item}</p>
          ))}
        </Section>

        <hr className='m-0' />

        <Section id='contact' title={t('contact.title')}>
          <Contact {...(t('contact'))} />
        </Section>
      </div>
    </>
  )
}
