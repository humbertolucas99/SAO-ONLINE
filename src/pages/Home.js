import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo ao mundo de Sword Art Online!</h1>
      <p>Prepare-se para entrar no mundo virtual e começar sua jornada!</p>
      <div className="buttons">
        <button className="btn-login">Entrar</button>
        <button className="btn-cadastro">Cadastrar-se</button>
      </div>
    </div>
  );
}

export default Home;
