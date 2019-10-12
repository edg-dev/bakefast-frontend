import React, {Component} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Nav, Navbar, NavItem } from "react-bootstrap";

import './App.css';
import SejaBemVindoCliente from './pages/Cliente/SejaBemVindoCliente';
import Login from './pages/Login';
import ModoDeUsar from './pages/Cliente/ModoDeUsar';
import Pedidos from './pages/Cliente/Pedidos';
import PerfilCliente from './pages/Cliente/PerfilCliente';
import IntroducaoPadaria from './pages/Padaria/IntroducaoPadaria';
import CadastroPadaria from './pages/Padaria/CadastroPadaria';
import PerfilPadaria from './pages/Padaria/PerfilPadaria';
import CadastroCardapio from './pages/Padaria/CadastroCardapio';
import CadastroProdutos from './pages/Padaria/CadastroProdutos';
import Notificacoes from './pages/Padaria/Notificacoes';
import Notificar from './pages/Padaria/Notificar';
import InformacoesEstatisticas from './pages/Padaria/InformacoesEstatisticas';
import VizualizarPadaria from './pages/Padaria/VizualizarPadaria';
import RealizarPedido from './pages/Cliente/RealizarPedido';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><Link to="/"><Button variant="primary"> Home </Button></Link> </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to="/cliente/"><Button variant="primary"> SejaBemVindoCliente </Button></Link></Nav.Link>
              <Nav.Link><Link to="/padaria/"><Button variant="primary"> IntrocucaoPadaria </Button></Link></Nav.Link>
              <Nav.Link><Link to="/ModoDeUsar/"><Button variant="primary">ModoDeUsar </Button></Link></Nav.Link>
              <Nav.Link><Link to="/Pedidos/"><Button variant="primary">Pedidos </Button></Link></Nav.Link>
              <Nav.Link><Link to="/PerfilCliente/"><Button variant="primary">PerfilCliente </Button></Link></Nav.Link>
            </Nav>
        </Navbar>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cliente/" component={SejaBemVindoCliente} />
          <Route path="/padaria/" component={IntroducaoPadaria} />
          <Route path="/ModoDeUsar/" component={ModoDeUsar} />
          <Route path="/Pedidos/" component={Pedidos} />
          <Route path="/PerfilCliente/" component={PerfilCliente} />
          <Route path="/Login/" component={Login} />
          <Route path="/IntroducaoPadaria/" component={IntroducaoPadaria} />
          <Route path="/CadastroPadaria/" component={CadastroPadaria} />
          <Route path="/PerfilPadaria/" component={PerfilPadaria} />
          <Route path="/CadastroCardapio/" component={CadastroCardapio} />
          <Route path="/CadastroProdutos/" component={CadastroProdutos} />
          <Route path="/Notificacoes/" component={Notificacoes} />
          <Route path="/Notificar/" component={Notificar} />
          <Route path="/InformacoesEstatisticas/" component={InformacoesEstatisticas} />
          <Route path="/VizualizarPadaria/" component={VizualizarPadaria} />
          <Route path="/RealizarPedido/" component={RealizarPedido} />
        </Switch>
      </main>
      <footer>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
        <Nav.Link><Link to="/Login/"><Button variant="primary">Login </Button></Link></Nav.Link>
        <Nav.Link><Link to="/IntroducaoPadaria/"><Button variant="primary">IntroducaoPadaria </Button></Link></Nav.Link>
        <Nav.Link><Link to="/CadastroPadaria/"><Button variant="primary">CadastroPadaria </Button></Link></Nav.Link>
        <Nav.Link><Link to="/PerfilPadaria/"><Button variant="primary">PerfilPadaria </Button></Link></Nav.Link>
        <Nav.Link><Link to="/CadastroCardapio/"><Button variant="primary">CadastroCardapio </Button></Link></Nav.Link>
        <Nav.Link><Link to="/CadastroProdutos/"><Button variant="primary">CadastroProdutos </Button></Link></Nav.Link>
        <Nav.Link><Link to="/Notificacoes/"><Button variant="primary">Notificacoes </Button></Link></Nav.Link>
        <Nav.Link><Link to="/Notificar/"><Button variant="primary">Notificar </Button></Link></Nav.Link>
        <Nav.Link><Link to="/InformacoesEstatisticas/"><Button variant="primary">InformacoesEstatisticas </Button></Link></Nav.Link>
        <Nav.Link><Link to="/VizualizarPadaria/"><Button variant="primary">VizualizarPadaria </Button></Link></Nav.Link>
        <Nav.Link><Link to="/RealizarPedido/"><Button variant="primary">RealizarPedido </Button></Link></Nav.Link>
        </Nav>
      </Navbar>
      </footer>
    </div>
  );
}

export default App;
