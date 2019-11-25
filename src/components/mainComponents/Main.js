import React from 'react';

import { Route, Switch } from "react-router-dom";

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Sobre from '../../pages/Padaria/Sobre';
import Galeria from '../../pages/Cliente/Galeria';
import Notificar from '../../pages/Padaria/Notificar';
import ModoDeUsar from '../../pages/Cliente/ModoDeUsar';
import PerfilCliente from '../../pages/Cliente/PerfilCliente';
import PerfilPadaria from '../../pages/Padaria/PerfilPadaria';
import RealizarPedido from '../../pages/Cliente/RealizarPedido';
import CadastroPadaria from '../../pages/Padaria/CadastroPadaria';
import CadastroCliente from '../../pages/Cliente/CadastroCliente';
import CadastroCardapio from '../../pages/Padaria/CadastroCardapio';
import CadastroProdutos from '../../pages/Padaria/CadastroProdutos';
import IntroducaoPadaria from '../../pages/Padaria/IntroducaoPadaria';
import VisualizarGaleria from '../../pages/Cliente/VisualizarGaleria';
import SejaBemVindoCliente from '../../pages/Cliente/SejaBemVindoCliente';

function Main() {
    return (
    <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cliente/" component={SejaBemVindoCliente} />
          <Route path="/padaria/" component={IntroducaoPadaria} />
          <Route path="/ModoDeUsar/" component={ModoDeUsar} />
          <Route path="/Galeria/" component={Galeria} />
          <Route path="/PerfilCliente/" component={PerfilCliente} />
          <Route path="/Login/" component={Login} />
          <Route path="/IntroducaoPadaria/" component={IntroducaoPadaria} />
          <Route path="/CadastroPadaria/" component={CadastroPadaria} />
          <Route path="/PerfilPadaria/" component={PerfilPadaria} />
          <Route path="/CadastroCardapio/" component={CadastroCardapio} />
          <Route path="/CadastroProdutos/" component={CadastroProdutos} />
          <Route path="/Notificar/" component={Notificar} />
          <Route path="/Sobre/" component={Sobre} />
          <Route path="/RealizarPedido/" component={RealizarPedido} />
          <Route path="/CadastroCliente/" component={CadastroCliente} />
          <Route path="/VisualizarGaleria/" component={VisualizarGaleria} />
        </Switch>
    </main>
              );
}
export default Main;