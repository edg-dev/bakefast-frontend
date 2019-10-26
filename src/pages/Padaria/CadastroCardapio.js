import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';

function CadastroCardapio() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h2>Coloque aqui uma imagem de seus cardápio contendo seus produtos.</h2>
                </div>

                <p>Para facilitar sua vida e a dos clientes, os produtos não necessitam ser cadastrados, evitando assim gasto de tempo desnecessário em cadastro ou alteração de produtos para
                    que você foque em suas vendas.</p>

                <div>
                    <ButtonPrimary button="Upload de Imagem" />
                </div>

                <div>
                    <img src="" />
                </div>

                <div>
                    <Link to="/CadastroProdutos"><ButtonPrimary button="Cadastrar Cardápio" /></Link>
                </div>
               
            </header>
        </div>
    );
}

export default CadastroCardapio;
