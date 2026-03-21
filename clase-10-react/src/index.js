import React from 'react';
import ReactDOM from 'react-dom/client';

// Importamos los estilos de css globales para la aplicación
import './css/index.css';

// Importamos el componente principal App.jsx
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);


