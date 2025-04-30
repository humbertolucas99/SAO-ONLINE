// src/pages/Login.js
import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Entrar</h2>
        <input className="login-input" type="email" placeholder="Email" />
        <input className="login-input" type="password" placeholder="Senha" />
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}
