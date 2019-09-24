import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

class Tela2 extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Seja Bem Vindo Cliente</h1>
                    <p>J� e Cadastrado? <MyButton button="Login"/></p>
                    <p>Cansado de esperar na fila de atendimento ou no caixa?</p>
                    <p>Acordou atrasado para ir ao trabalho e n�o tem tempe de tomar um caf�, mas consegue ir a padaria?</p>
                    <p>Quer ganhar um tempinho antes daquela aula e ver aquele video que voc� deixou pra mais tarde?</p>
                    <p>Pois saiba que com o App Bake Fast voc� consegue fazer tudo isso! </p>
                    <MyButton button="Como Usar" />
                </header>
            </div>
        );
    }
}

export default Tela2;
