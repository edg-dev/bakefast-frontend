import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function CadastroCardapio() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h2>Coloque aqui uma imagem de seus card�pio contendo seus produtos.</h2>
                </div>

                <p>Para facilitar sua vida e a dos clientes, os produtos n�o necessitam ser cadastrados, evitando assim gasto de tempo desnecess�rio em cri��o ou altera��o de produtos para
                    que voc� foque em suas vendas.</p>

                <div>
                    <MyButton button="Upload de Imagem" />
                </div>

                <div>
                    <img src="logo.src" />
                </div>

                <div>
                    <Link to="/CadastroProdutos"><MyButton button="Cadastrar Card�pio" /></Link>
                </div>
               
            </header>
        </div>
    );
}

export default CadastroCardapio;
