import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'antd/dist/antd.css';
import './root.css';
import i18next from './i18n.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
