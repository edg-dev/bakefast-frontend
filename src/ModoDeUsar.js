import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function ModoDeUsar() {
        return (
            <div className="App">
                <header className="App-header">

                    <h1>Então se interessou pelo App hein? Vamos colocar manteiga no pão?</h1>

                    <div><p> Primeiro de tudo ache uma padaria no aplicativo bem proxima a você.</p></div>

                    <div><p>Depois, procure o que voce deseja comprar, baseado no que a padaria tem a oferecer.</p></div>

                    <div><p>Crie seu pedido e pegue o pombo, digo, o pão!</p></div>

                    <Link to="/TelaPedidos/">Entendi</Link>
                </header>
            </div>
        );
}

export default ModoDeUsar;