import React, { Component } from 'react';
import '../../App.css';


class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function RealizarPedido() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h3>Seu Pedido foi:</h3>
                </div>

                <div>
                    <ul>
                        <li>3 pães de dal</li>
                        <li>2 pães de queijo</li>
                        <li>1 bolo</li>
                    </ul>
                </div>

                <div>
                    <h4>Deseja realizar o pedido?</h4>
                    <MyButton button="Confirmar" />
                    <MyButton button="Voltar" />
                </div>
            </header>
        </div>
    );
}

export default RealizarPedido;