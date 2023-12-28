import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h1 className='mb-0'>Pierre <span className='text-primary'>Villette</span></h1>

      <div className='subheading mb-5'>
        {t('about.informations')}
        <a href='mailto:villette.pierre@gmail.com' target='_blank' rel='noopener noreferrer'>villette.pierre@gmail.com</a>
      </div>

      <p className='lead'>{t('about.introduction')}</p>

      <div className='mb-5'>
        <i className='fas fa-file-pdf'></i>&nbsp;
        <a href={t('about.resume.url')}>{t('about.resume.label')}</a>
      </div>

      <div className='social-icons'>
        {t('about.socialMedia').map((item, index) => (
          <a key={index} className='social-icon' href={item.href} aria-label={item.name} target='_blank' rel='noopener noreferrer'>
            <i className={item.icon}></i>
          </a>
        ))}
      </div>
    </>
  )
}
