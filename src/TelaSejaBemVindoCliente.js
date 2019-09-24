import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function TelaSejaBemVindoCliente() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Seja Bem Vindo Cliente</h1>
                    <p>Já é Cadastrado? <MyButton button="Login"/></p>
                    <p>Cansado de esperar na fila de atendimento ou no caixa?</p>
                    <p>Acordou atrasado para ir ao trabalho e não tem tempe de tomar um café, mas consegue ir a padaria?</p>
                    <p>Quer ganhar um tempinho antes daquela aula e ver aquele video que você deixou pra mais tarde?</p>
                    <p>Pois saiba que com o App Bake Fast você consegue fazer tudo isso! </p>
                    <Link to="/TelaModoDeUsar/">Modo de usar</Link>
                </header>
            </div>
        );
}

export default TelaSejaBemVindoCliente;
