import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function Notificar() {
    return (
        <div className="App">
            <header className="App-header">

                <div>
                    <h2>Notificações</h2>
                </div>

                <div>
                    <p>Acabaram de sair bolos do forno! <MyButton button="Notificar" /></p>
                </div>

                <div>
                    <p>Pães quentinhos do forno <MyButton button="Notificar" /></p>
                </div>

                <div>
                    <p>Teste! <MyButton button="Notificar" /></p>
                </div>

                <div>
                    <p>Notificações cadastradas : 3/3</p>
                </div>

                <div>
                    <MyButton button="Gerenciar Notificações" />
                </div>
            </header>
        </div>
    );
}

export default Notificar;
