import React, {Component} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { Button } from 'react-bootstrap';

import './App.css';
import TelaSejaBemVindoCliente from './TelaSejaBemVindoCliente';
import Login from './Login';
import TelaModoDeUsar from './TelaModoDeUsar';
import TelaPedidos from './TelaPedidos';
import TelaPerfil from './TelaPerfil';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cliente/" component={TelaSejaBemVindoCliente} />
          <Route path="/TelaModoDeUsar/" component={TelaModoDeUsar} />
          <Route path="/TelaPedidos/" component={TelaPedidos} />
          <Route path="/TelaPerfil/" component={TelaPerfil} />
          <Route path="/Login/" component={Login} />
        </Switch>
      </main>
      <footer>
      <Button variant="primary"> <Link to="/">Home</Link> </Button>
      <Button variant="primary"> <Link to="/cliente/">TelaSejaBemVindoCliente</Link> </Button>
      <Button variant="primary"> <Link to="/TelaModoDeUsar/">TelaModoDeUsar</Link> </Button>
      <Button variant="primary"> <Link to="/TelaPedidos/">TelaPedidos</Link> </Button>
      <Button variant="primary"> <Link to="/TelaPerfil/">TelaPerfil</Link> </Button>
      <Button variant="primary"> <Link to="/Login/">Login</Link> </Button>
      </footer>
    </div>
  );
}

export default App;
