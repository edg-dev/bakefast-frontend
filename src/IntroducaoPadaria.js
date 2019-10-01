import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.png';
import './App.css';

class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function IntrocucaoPadaria() {
    return (
        <div className="App">
            <header className="App-header">
                <div>

                    <div>
                        <h2>Seus cliente agora poderão fazer pedidos antecipados!</h2>
                    </div>

                    <div>
                        <img src="logo.src" /><p>Aumente a quantidade de vendas em horários de pico.</p>
                    </div>

                    <div>
                        <h3>Com o App Bake Fast, seus cliente te encontram em nossa rede de padarias cadastradas em nossa rede de padarias cadastradas,
							efetuam "pedidos" de maneira antecipada e agilizam processos de pagamento.</h3>
                    </div>

                    <div>
                        <p>Menos Filas</p><p>Mais produtos vendidos!</p><p>Mais clientes satisfeitos!</p><img src="logo.png" />
                    </div>

                    <Link to="/CadastroPadaria/">Cadastrar Agora</Link>
                    
                </div>
            </header>
        </div>
    );
}

export default IntrocucaoPadaria;

