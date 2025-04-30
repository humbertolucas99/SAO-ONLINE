import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Estilos para a Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Sword Art Online</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
        <li><Link to="/info">Info do Jogo</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
