import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './utils/context'


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
