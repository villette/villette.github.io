import { useEffect } from 'react';

import About from './About';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Navigation from './Navigation';
import Section from './Section';
import Skills from './Skills';

import '../styles/styles.scss';

export default function App({ currentLanguage, supportedLanguages, data }) {
  useEffect(() => {
    document.title = data.layout.title;

    const descriptionElement = document.querySelector('meta[name="description"]');
    descriptionElement.setAttribute('content', data.layout.description);

    const ogTitleElement = document.querySelector('meta[property="og:title"]');
    ogTitleElement.setAttribute('content', data.layout.title);

    const ogDescriptionElement = document.querySelector('meta[property="og:description"]');
    ogDescriptionElement.setAttribute('content', data.layout.description);
  }, []);

  return (
    <>
      <Navigation
        links={data.navigation}
        currentLanguage={currentLanguage}
        supportedLanguages={supportedLanguages}
      />

      <div className='container-fluid p-0'>
        <Section id='about'>
          <About data={data.about} />
        </Section>

        <hr className='m-0' />

        <Section id='experience' title={data.experience.title}>
          {data.experience.work.map((item, index) => (
            <Experience
              key={index}
              title={item.title}
              company={item.company}
              location={item.location}
              tasks={item.tasks}
              dates={item.dates}
            />
          ))}
        </Section>

        <hr className='m-0' />

        <Section id='education' title={data.education.title}>
          {data.education.diplomas.map((item, index) => (
            <Education
              key={index}
              label={item.label}
              school={item.school}
              description={item.description}
              date={item.date}
            />
          ))}
        </Section>

        <hr className='m-0' />

        <Section id='skills' title={data.skills.title}>
          {data.skills.groups.map((item, index) => (
            <Skills
              key={index}
              title={item.title}
              items={item.items}
            />
          ))}
        </Section>

        <hr className='m-0' />

        <Section id='interests' title={data.interests.title}>
          {data.interests.lines.map((item, index) => (
            <p key={index} className={index === data.interests.lines.length - 1 ? 'mb-0' : null}>{item}</p>
          ))}
        </Section>

        <hr className='m-0' />

        <Section id='contact' title={data.contact.title}>
          <Contact
            success={data.contact.success}
            error={data.contact.error}
            labels={data.contact.labels}
            placeholders={data.contact.placeholders}
          />
        </Section>
      </div>
    </>
  )
}
