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

                    <h1>Ent�o se interessou pelo App hein? Vamos colocar manteiga no p�o?</h1>

                    <div><p> Primeiro de tudo ache uma padaria no aplicativo bem proxima a voc�.<img src={logo} className="App-logo" alt="logo" /></p></div>

                    <div><p>Depois, procure o que voce deseja comprar, baseado no que a padaria tem a oferecer.<img src={logo} className="App-logo" alt="logo" /></p></div>

                    <div><p>Crie seu pedido e pegue o pombo, digo, o p�o!<img src={logo} className="App-logo" alt="logo" /></p></div>

                    <MyButton button="Entendi" />
                </header>
            </div>
        );
    }
}

export default TelaModoDeUsar;