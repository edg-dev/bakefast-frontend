import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

class TelaPedido extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Fazer Pedido</h1>
                    <div class="dropdown">
                        <span>Selecionar padaria</span>
                        <div class="dropdown-content">
                            <p>ElisMarina!</p>
                            <p>Vesuvio!</p>
                        </div>
                    </div>
                    <h3>Produtos</h3>
                    <table>
                        <tr>
                            <th>Produto</th>
                            <th>Valor</th>
                        </tr>
                        <tr>
                            <td>P�o Frances</td>
                            <td>R$0.25</td>
                        </tr>
                        <tr>
                            <td>P�o de Queijo</td>
                            <td>R$0.80</td>
                        </tr>
                    </table>

                    <h3>Tempo estimado de chegada:</h3>
                    <label>Tempo</label>

                    <p>Importante: o tempo de chegada � o tempo que voc� estima chegar a padaria para pegar o pedido</p>
                    
                    <MyButton button="Pedir!" />
                </header>
            </div>
        );
    }
}

export default TelaPedido;
