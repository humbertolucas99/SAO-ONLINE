import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Caso tenha um arquivo de estilo

// Componente Home
function Home() {
  return (
    <div>
      <h2>Bem-vindo à página principal!</h2>
      <p>Faça login ou crie uma conta para começar a jogar.</p>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// Componente Login
function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const user = usuarios.find((u) => u.email === email && u.senha === senha);
    if (user) {
      alert('Login bem-sucedido!');
    } else {
      alert('Credenciais inválidas!');
    }
    setEmail('');
    setSenha('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Entrar</button>
      </form>
      <nav>
        <ul>
          <li><Link to="/">Voltar à página inicial</Link></li>
          <li><Link to="/cadastro">Criar conta</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// Componente Cadastro
function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    if (usuarios.find((u) => u.email === email)) {
      alert('Este email já está cadastrado.');
      return;
    }
    usuarios.push({ email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Cadastro realizado com sucesso!');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
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
        <input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      <nav>
        <ul>
          <li><Link to="/">Voltar à página inicial</Link></li>
          <li><Link to="/login">Já tenho uma conta</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// Componente App
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
