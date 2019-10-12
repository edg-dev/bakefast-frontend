import React, { Component } from 'react';
import '../../App.css';


class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

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
                    <p>Acesse e dispare notificações aos seus clientes <MyButton button="Notificações" /></p>
                </div>

                <div>
                    <p>Cadastre uma imagem contendo seus produtos <MyButton button="Cardápio" /></p>
                </div>

                <div>
                    <p>Veja informações sobre vendas<MyButton button="Informações" /></p>
                </div>

                <div>
                    <p>Cadastre imagens de seus produtos<MyButton button="Imagens" /></p>
                </div>

            </header>
        </div>
    );
}

export default PerfilPadaria;