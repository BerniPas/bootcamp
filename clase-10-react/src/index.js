import React from 'react';
import ReactDOM from 'react-dom/client';

// Importamos los estilos de css globales para la aplicación
import './css/index.css';

// Importamos el componente principal App.jsx
import App from './App';

//2. Importamos el administrador de rutas de React Router DOM
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*2.1 Envolvemos la aplicación con el administrador de rutas */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


