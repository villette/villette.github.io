import React, { useEffect } from 'react';
import { useRef } from 'react';
import { ScrollSpy } from 'bootstrap';

import LanguageLink from './LanguageLink';

export default function Navigation({ links, currentLanguage, setCurrentLanguage, supportedLanguages }) {
  const sideNav = useRef(null);

  useEffect(() => {
    new ScrollSpy(document.body, {
      target: sideNav,
      rootMargin: '0px 0px -40%',
      smoothScroll: true,
    });
  }, []);

  return (
    <nav ref={sideNav} id='sideNav' className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
      <a className='navbar-brand js-scroll-trigger' href='#page-top'>
        <span className='d-block d-lg-none'>Pierre Villette</span>
        <span className='d-none d-lg-block'>
          <img className='img-fluid img-profile rounded-circle mx-auto mb-2' src='/img/profile.jpg' alt='Pierre Villette' height='144' width='144' />
        </span>
      </a>

      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div id='navbarResponsive' className='collapse navbar-collapse'>
        <ul className='navbar-nav'>
          {links.map(item => (
            <li key={item.href} className='nav-item'>
              <a className='nav-link js-scroll-trigger' href={item.href}>{item.label}</a>
            </li>
          ))}

          <li className='nav-item'>
            <span className='nav-link mt-3'>
              {supportedLanguages.map((item, index) => (
                <LanguageLink
                  key={index}
                  language={item}
                  isActive={currentLanguage === item}
                  isNotLast={index !== supportedLanguages.length - 1}
                  setCurrentLanguage={setCurrentLanguage}
                />
              ))}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}
