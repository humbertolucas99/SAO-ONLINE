import React, { useState } from 'react';
import './App.css'; // Arquivo de estilo opcional

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      alert('Preencha todos os campos');
      return;
    }

    if (isLogin) {
      const saved = JSON.parse(localStorage.getItem('usuarios') || '[]');
      const user = saved.find((u) => u.email === email && u.senha === senha);
      if (user) {
        alert('Login bem-sucedido!');
      } else {
        alert('Credenciais inválidas');
      }
    } else {
      let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      if (usuarios.find((u) => u.email === email)) {
        alert('Email já cadastrado');
        return;
      }
      usuarios.push({ email, senha });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('Cadastro realizado com sucesso!');
      setIsLogin(true);
    }

    setEmail('');
    setSenha('');
  };

  return (
    <div className="container">
      <h1>SAO Online</h1>
      <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <button type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Criar conta' : 'Já tenho conta'}
      </button>
    </div>
  );
}
