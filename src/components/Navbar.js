import React from 'react';

export default function Navbar({ onNavigate }) {
  return (
    <nav>
      <button onClick={() => onNavigate('home')}>Início</button>
      <button onClick={() => onNavigate('login')}>Login</button>
      <button onClick={() => onNavigate('cadastro')}>Cadastro</button>
      <button onClick={() => onNavigate('perfil')}>Perfil</button>
      <button onClick={() => onNavigate('info')}>Info do Jogo</button>
    </nav>
  );
}
