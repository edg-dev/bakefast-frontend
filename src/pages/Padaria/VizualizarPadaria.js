import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function VizualizarPadaria() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div>
                        <h2>Padaria X</h2>
                    </div>
                    <div>
                        <h4>Cardapio</h4>
                        <img src="logo.src" />
                    </div>

                    <div>
                        <h2>Padaria X</h2>
                    </div>
                    <div>
                        <h2>Padaria X</h2>
                    </div>

                    <div>
                        <MyButton button="Vizualizar Produtos" />
                    </div>

                    <div>
                        <MyButton button="Fazer Pedido!" />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default VizualizarPadaria;


