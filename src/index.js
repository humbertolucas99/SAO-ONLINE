import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação do ReactDOM para renderizar no root
import './index.css'; // (opcional) arquivo de estilo global
import App from './App'; // Importando o componente principal

// A partir do React 18, usamos createRoot para renderizar a aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizando o componente App dentro do root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
