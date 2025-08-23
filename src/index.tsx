import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/minimal.css';
import App from './App';
import Clarity from '@microsoft/clarity';

const projectId = "szd1owl9nb"

Clarity.init(projectId);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
