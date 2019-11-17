import React from 'react';
import { Route, Switch } from "react-router-dom";

import SejaBemVindoCliente from '../../pages/Cliente/SejaBemVindoCliente';
import Login from '../../pages/Login';
import ModoDeUsar from '../../pages/Cliente/ModoDeUsar';
import Galeria from '../../pages/Cliente/Galeria';
import PerfilCliente from '../../pages/Cliente/PerfilCliente';
import IntroducaoPadaria from '../../pages/Padaria/IntroducaoPadaria';
import CadastroPadaria from '../../pages/Padaria/CadastroPadaria';
import CadastroCliente from '../../pages/Cliente/CadastroCliente';
import PerfilPadaria from '../../pages/Padaria/PerfilPadaria';
import CadastroCardapio from '../../pages/Padaria/CadastroCardapio';
import CadastroProdutos from '../../pages/Padaria/CadastroProdutos';
import Notificacoes from '../../pages/Padaria/Notificacoes';
import Notificar from '../../pages/Padaria/Notificar';
import InformacoesEstatisticas from '../../pages/Padaria/InformacoesEstatisticas';
import VizualizarPadaria from '../../pages/Padaria/VizualizarPadaria';
import RealizarPedido from '../../pages/Cliente/RealizarPedido';
import Home from '../../pages/Home';
import VisualizarGaleria from '../../pages/Cliente/VisualizarGaleria';

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
          <Route path="/Notificacoes/" component={Notificacoes} />
          <Route path="/Notificar/" component={Notificar} />
          <Route path="/InformacoesEstatisticas/" component={InformacoesEstatisticas} />
          <Route path="/VizualizarPadaria/" component={VizualizarPadaria} />
          <Route path="/RealizarPedido/" component={RealizarPedido} />
          <Route path="/CadastroCliente/" component={CadastroCliente} />
          <Route path="/VisualizarGaleria/" component={VisualizarGaleria} />
        </Switch>
    </main>
              );
}
export default Main;