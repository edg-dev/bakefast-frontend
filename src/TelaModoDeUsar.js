import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

class TelaModoDeUsar extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <h1>Então se interessou pelo App hein? Vamos colocar manteiga no pão?</h1>

                    <p>Primeiro de tudo ache uma padaria no aplicativo bem proxima a você.<img src={logo} className="App-logo" alt="logo" /></p>

                    <p>Depois, procure o que voce deseja comprar, baseado no que a padaria tem a oferecer.<img src={logo} className="App-logo" alt="logo" /></p>

                    <p>Crie seu pedido e pegue o pombo, digo, o pão!<img src={logo} className="App-logo" alt="logo" /></p>

                    <MyButton button="Entendi" />
                </header>
            </div>
        );
    }
}

export default TelaSejaBemVindoCliente;