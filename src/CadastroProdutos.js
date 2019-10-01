import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function CadastroProdutos() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h2>Cadastre aqui imagens de seus produtos.</h2>
                </div>

                <p>Quem nunca ficou com vontade de comer aquele peda�o de bolo s� de ver o chocolate escorrendo pela massa? N�s entendemos muito bem,
					e por isso voc� pode colocar fotos de seus produtos, para que os clientes tambem fiquem com �gua na boca!</p>

                <div>
                    <MyButton button="Upload de Imagens" />
                </div>

                <div>
                    <img src="logo.src" />
                    <img src="logo.src" />
                    <img src="logo.src" />
                    <img src="logo.src" />
                </div>

                <div>
                    <Link to="/"><MyButton button="Cadastrar Imagens" /></Link>
                </div>

            </header>
        </div>
    );
}

export default CadastroProdutos;
