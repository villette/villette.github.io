import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import TagManager from 'react-gtm-module';
TagManager.initialize({ gtmId: 'UA-139927798-1' });

import './i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
