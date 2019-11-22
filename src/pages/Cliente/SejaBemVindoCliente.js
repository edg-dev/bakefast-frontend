import React from 'react';

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ButtonInfo from '../../components/cssComponents/buttonInfo';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';

import '../../App.css';

function SejaBemVindoCliente() {
        return (
            <div className="App-header">
                 <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <p>Já é Cadastrado? </p>
                                <Link to="/Login">
                                    <ButtonPrimary button="Login" />
                                    <p></p>
                                </Link>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <h3>Bem Vindo </h3>
                                <p>Acordou atrasado para ir ao trabalho e não tem tempe de tomar um café, mas consegue ir a padaria?</p>
                                <p>Quer ganhar um tempinho antes daquela aula e ver aquele video que você deixou pra mais tarde?</p>
                                <p>Saiba que com o App Bake Fast você consegue fazer tudo isso! </p>
                                    <Link to="/ModoDeUsar/">
                                        <ButtonInfo button="Modo de usar"/>
                                    </Link>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </div>
        );
}

export default SejaBemVindoCliente;
