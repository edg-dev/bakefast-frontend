import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';

function InformacoesEstatisticas() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div>
                        <h2>Informações Estatísticas!</h2>
                    </div>

                    <div>
                        <p>Foram concretizadas X vendas nos ultimos 30 dias</p>
                    </div>

                    <div>
                        <p>Foram canceladas X vendas nos ultimos 30 dias</p>
                    </div>

                    <div>
                        <h4>Produtos mais vendidos</h4>
                    </div>

                    <div>
                        <p>GRAFICO AKI</p>
                    </div>

                    <div>
                        <p>Média de tempo de chegada dos clientes 3:13 min</p>
                    </div>
                    <Link to="/PerfilCliente/"><ButtonPrimary button="Voltar" /></Link>
                </div>
            </header>
        </div>
    );
}

export default InformacoesEstatisticas;


