import React, { useState } from 'react';
import './Cadastro.css';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    if (senha !== confirmSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="cadastro">
      <h2>Criar Conta</h2>
      <form onSubmit={handleCadastro}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Confirmar Senha" 
          value={confirmSenha} 
          onChange={(e) => setConfirmSenha(e.target.value)} 
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
