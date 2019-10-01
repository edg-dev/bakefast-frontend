import React, {Component} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { Button } from 'react-bootstrap';

import './App.css';
import SejaBemVindoCliente from './SejaBemVindoCliente';
import Login from './Login';
import ModoDeUsar from './ModoDeUsar';
import Pedidos from './Pedidos';
import PerfilCliente from './PerfilCliente';
import IntroducaoPadaria from './IntroducaoPadaria';
import CadastroPadaria from './CadastroPadaria';
import PerfilPadaria from './PerfilPadaria';
import CadastroCardapio from './CadastroCardapio';
import CadastroProdutos from './CadastroProdutos';
import Notificacoes from './Notificacoes';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cliente/" component={SejaBemVindoCliente} />
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
        </Switch>
      </main>
      <footer>
      <Button variant="primary"> <Link to="/">Home</Link> </Button>
      <Button variant="primary"> <Link to="/cliente/">SejaBemVindoCliente</Link> </Button>
      <Button variant="primary"> <Link to="/ModoDeUsar/">ModoDeUsar</Link> </Button>
      <Button variant="primary"> <Link to="/Pedidos/">Pedidos</Link> </Button>
      <Button variant="primary"> <Link to="/PerfilCliente/">PerfilCliente</Link> </Button>
      <Button variant="primary"> <Link to="/Login/">Login</Link> </Button>
      <Button variant="primary"> <Link to="/IntroducaoPadaria/">IntroducaoPadaria</Link></Button>
      <Button variant="primary"> <Link to="/CadastroPadaria/">CadastroPadaria</Link> </Button>
      <Button variant="primary"> <Link to="/PerfilPadaria/">PerfilPadaria</Link> </Button>
      <Button variant="primary"> <Link to="/CadastroCardapio/">CadastroCardapio</Link> </Button>
      <Button variant="primary"> <Link to="/CadastroProdutos/">CadastroProdutos</Link> </Button>
      <Button variant="primary"> <Link to="/Notificacoes/">Notificacoes</Link> </Button>
      </footer>
    </div>
  );
}

export default App;
