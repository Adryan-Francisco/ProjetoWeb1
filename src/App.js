import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Definição dos componentes
const Home = () => (
  <div className="page-section">
    <h2>Bem-vindo ao Sistema de Gestão de Estoque</h2>
    <p>Gerencie seus produtos de forma simples e eficiente.</p>
  </div>
);

const Produtos = () => (
  <div className="page-section">
    <h2>Gestão de Produtos</h2>
    <p>Aqui você pode cadastrar e atualizar seus produtos.</p>
  </div>
);

const Movimentacao = () => (
  <div className="page-section">
    <h2>Movimentação de Estoque</h2>
    <p>Gerencie a entrada e saída de produtos no estoque.</p>
  </div>
);

const Relatorios = () => (
  <div className="page-section">
    <h2>Relatórios de Estoque</h2>
    <p>Acesse relatórios detalhados sobre o seu estoque.</p>
  </div>
);

const Configuracoes = () => (
  <div className="page-section">
    <h2>Configurações do Sistema</h2>
    <p>Configure preferências e ajustes do sistema.</p>
  </div>
);

// Tela de Login
const Login = () => (
  <div className="page-section">
    <h2>Login</h2>
    <form>
      <div className="form-group">
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" name="username" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" className="form-control" />
      </div>
      <button type="submit" className="btn">Entrar</button>
    </form>
  </div>
);

// Tela de Cadastro
const Cadastro = () => (
  <div className="page-section">
    <h2>Cadastrar Novo Usuário</h2>
    <form>
      <div className="form-group">
        <label htmlFor="username">Nome de Usuário:</label>
        <input type="text" id="username" name="username" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Senha:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" />
      </div>
      <button type="submit" className="btn">Cadastrar</button>
    </form>
  </div>
);

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          {/* Menu de Navegação */}
          <nav className="navbar">
            <ul className="navbar-list">
              <li><Link to="/" className="navbar-link">Início</Link></li>
              <li><Link to="/produtos" className="navbar-link">Produtos</Link></li>
              <li><Link to="/movimentacao" className="navbar-link">Movimentação</Link></li>
              <li><Link to="/relatorios" className="navbar-link">Relatórios</Link></li>
              <li><Link to="/configuracoes" className="navbar-link">Configurações</Link></li>
              <li><Link to="/login" className="navbar-link">Login</Link></li>
              <li><Link to="/cadastro" className="navbar-link">Cadastrar</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/movimentacao" element={<Movimentacao />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; Elaborado por: Adryan</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
