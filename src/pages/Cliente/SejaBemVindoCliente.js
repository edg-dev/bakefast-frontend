import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Button, Image, Container, Row, Col } from "react-bootstrap";
import '../../App.css';


class MyButton extends Component {
    render() {
        return <Button variant="outline-warning">{this.props.button}</Button>
    }
}

function SejaBemVindoCliente() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Seja Bem Vindo Cliente</h1>
                    <p>Já é Cadastrado? <Link to="/Login"><MyButton button="Login" /></Link></p>
                    <p>Cansado de esperar na fila de atendimento ou no caixa?</p>
                    <p>Acordou atrasado para ir ao trabalho e não tem tempe de tomar um café, mas consegue ir a padaria?</p>
                    <p>Quer ganhar um tempinho antes daquela aula e ver aquele video que você deixou pra mais tarde?</p>
                    <p>Pois saiba que com o App Bake Fast você consegue fazer tudo isso! </p>
                    <Link to="/ModoDeUsar/"><MyButton button="Modo de usar"/></Link>
                </header>
            </div>
        );
}

export default SejaBemVindoCliente;
