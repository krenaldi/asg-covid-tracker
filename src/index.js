import React from 'react';
import ReactDOM from 'react-dom';
import CountryProvider from './utils/GlobalState'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <CountryProvider>
      <App />
    </CountryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
