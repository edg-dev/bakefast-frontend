import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function TelaPerfil() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Logado como: Usuário</h1>

                    <label>Buscar Padarias</label>

                    <h3>Padarias favoritas:</h3>

                    <p>Padaria X <MyButton button="Info" /></p>

                    <h3>Pedidos Recentes:</h3>
                    <ul>
                        <li>3 pães de dal</li>
                        <li>2 pães de queijo</li>
                        <li>1 bolo</li>
                    </ul>

                    <MyButton button="Realizar Pedido" />
                </header>
            </div>
        );
}

export default TelaPerfil;
