import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function Notificacoes() {
    return (
        <div className="App">
            <header className="App-header">

                <div>
                    <h2>Notifica��es</h2>
                </div>

                <div>
                    <table>
                        <tr>
                            <th>Tipo</th>
                            <th>Texto</th>
                            <th>A��o</th>
                        </tr>
                        <tr>
                            <td>Bolos</td>
                            <td>"Bolos Fresquinhos ..."</td>
                            <td><a href="">Edit</a></td>
                        </tr>
                        <tr>
                            <td>P�es</td>
                            <td>"P�es acabam de sair ..."</td>
                            <td><a href="">Edit</a></td>
                        </tr>
                        <tr>
                            <td>Doces</td>
                            <td>"Bolos,tortas e etc ..."</td>
                            <td><a href="">Edit</a></td>
                        </tr>
                    </table>
                </div>

                <div>
                    <label>
                        Tipo da Notifica��o:
                                <input type="text" name="notificacao" placeholder="Tipo da Notifica��o" />
                    </label>
                </div>

                <div>
                    <label>
                        Texto da Notifica��o:
                                <input type="text" name="textoNotificacao" placeholder="" />
                    </label>
                </div>


                <MyButton button="Realizar Pedido" />
            </header>
        </div>
    );
}

export default Notificacoes;
