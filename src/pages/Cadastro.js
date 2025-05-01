// src/pages/Cadastro.js
import React from 'react';
import './Cadastro.css';

export default function Cadastro() {
  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2 className="cadastro-title">Criar Conta</h2>
        <input className="cadastro-input" type="text" placeholder="Nome de usuário" />
        <input className="cadastro-input" type="email" placeholder="Email" />
        <input className="cadastro-input" type="password" placeholder="Senha" />
        <button className="cadastro-button">Cadastrar</button>
      </div>
    </div>
  );
}
