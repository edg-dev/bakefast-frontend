import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';

function IntrocucaoPadaria() {
    return (
        <div className="App">
            <header className="App-header">
                <div>

                    <div>
                        <h2>Seus cliente agora poderão fazer pedidos antecipados!</h2>
                    </div>

                    <div>
                        <img src="" /><p>Aumente a quantidade de vendas em horários de pico.</p>
                    </div>

                    <div>
                        <h3>Com o App Bake Fast, seus cliente te encontram em nossa rede de padarias cadastradas em nossa rede de padarias cadastradas,
							efetuam "pedidos" de maneira antecipada e agilizam processos de pagamento.</h3>
                    </div>

                    <div>
                        <p>Menos Filas</p><p>Mais produtos vendidos!</p><p>Mais clientes satisfeitos!</p><img src="" />
                    </div>

                    <Link to="/CadastroPadaria/"><ButtonPrimary button="Cadastrar Agora"/></Link>
                    
                </div>
            </header>
        </div>
    );
}

export default IntrocucaoPadaria;

