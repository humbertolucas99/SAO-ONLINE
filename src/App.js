import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';
import InfoJogo from './pages/InfoJogo';
import Navbar from './components/Navbar';

function App() {
  const [pagina, setPagina] = useState('home');

  // Função para renderizar o conteúdo com base na página selecionada
  const renderizarPagina = () => {
    switch (pagina) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login />;
      case 'cadastro':
        return <Cadastro />;
      case 'perfil':
        return <Perfil />;
      case 'info':
        return <InfoJogo />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      {/* Navbar com botões que mudam a "página" */}
      <Navbar onNavigate={setPagina} />
      
      {/* Conteúdo da página atual */}
      {renderizarPagina()}
    </div>
  );
}

export default App;
