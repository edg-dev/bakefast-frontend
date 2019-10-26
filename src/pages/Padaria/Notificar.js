import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';

function Notificar() {
    return (
        <div className="App">
            <header className="App-header">

                <div>
                    <h2>Notificações</h2>
                </div>

                <div>
                    <p>Acabaram de sair bolos do forno! <ButtonPrimary button="Notificar" /></p>
                </div>

                <div>
                    <p>Pães quentinhos do forno <ButtonPrimary button="Notificar" /></p>
                </div>

                <div>
                    <p>Notificações cadastradas : 3/3</p>
                </div>

                <div>
                    <Link to="/Notificacoes/"><ButtonInfo button="Gerenciar Notificações" /></Link>
                </div>
            </header>
        </div>
    );
}

export default Notificar;
