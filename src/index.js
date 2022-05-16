import React from 'react';
import { render } from 'react-dom';
import { AuthContextProvider } from './store/auth-context';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  rootElement,
);
