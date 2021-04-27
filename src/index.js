import React from 'react';
import ReactDOM from 'react-dom';
import IntroProvider from './utils/GlobalState'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <IntroProvider>
      <App />
    </IntroProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
