import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';

function PerfilPadaria() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>Logado como: Vesúvio Padarias</h1>
                </div>

                <div>
					<h3>Voce tem 3 Pedidos:</h3>
					<ul>
						<li>3 pães de dal</li>
						<li>2 pães de queijo</li>
						<li>1 bolo</li>
					</ul>
                </div>
               
                <div>
                    <p>Foram realizado X pedidos nos ultimos 30min:</p>
                </div>

                <div>
                    <p>Acesse e dispare notificações aos seus clientes:<Link to="/Notificar/"><ButtonPrimary button="Notificar" /></Link></p>
                </div>

                <div>
                    <p>Cadastre uma imagem de seu cardápio:<Link to="/CadastroCardapio/"><ButtonPrimary button="Cadastrar" /></Link></p>
                </div>

                <div>
                    <p>Cadastre imagens de seus produtos:<Link to="/CadastroProdutos/"><ButtonPrimary button="Cadastrar" /></Link></p>
                </div>

                <div>
                    <p>Veja informações sobre vendas:<ButtonInfo button="Informações" /></p>
                </div>

            </header>
        </div>
    );
}

export default PerfilPadaria;