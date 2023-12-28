import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import TagManager from 'react-gtm-module';
TagManager.initialize({ gtmId: 'UA-139927798-1' });

import { supportedLanguages, currentLanguage } from './i18n/i18n.mjs';
const data = await import(`./i18n/data/${currentLanguage}.json`);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App currentLanguage={currentLanguage} supportedLanguages={supportedLanguages} data={data} />
  </React.StrictMode>,
)
