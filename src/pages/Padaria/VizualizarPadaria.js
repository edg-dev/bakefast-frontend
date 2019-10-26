import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';

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
                        <ButtonInfo button="Vizualizar Produtos" />
                    </div>

                    <div>
                        <Link to="/Pedidos/"><ButtonPrimary button="Fazer Pedido!" /></Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default VizualizarPadaria;


