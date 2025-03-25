import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          {/* Menu de Navegação */}
          <nav className="navbar">
            <ul className="navbar-list">
              <li><a href="/" className="navbar-link">Início</a></li>
              <li><a href="/produtos" className="navbar-link">Produtos</a></li>
              <li><a href="/movimentacao" className="navbar-link">Movimentação</a></li>
              <li><a href="/relatorios" className="navbar-link">Relatórios</a></li>
              <li><a href="/configuracoes" className="navbar-link">Configurações</a></li>
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
