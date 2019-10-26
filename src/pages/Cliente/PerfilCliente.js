import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';

function PerfilCliente() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Logado como: Usuário</h1>

                    <label>Buscar Padarias</label>

                    <h3>Padarias favoritas:</h3>

                    <p>Padaria X <Link to="/InformacoesEstatisticas/"><ButtonInfo button="Info" /></Link></p>

                    <h3>Pedidos Recentes:</h3>
                    <ul>
                        <li>3 pães de dal</li>
                        <li>2 pães de queijo</li>
                        <li>1 bolo</li>
                    </ul>

                    <Link to="/Pedidos/"><ButtonPrimary button="Realizar Pedido" /></Link>
                </header>
            </div>
        );
}

export default PerfilCliente;
