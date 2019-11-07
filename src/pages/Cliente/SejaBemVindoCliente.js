import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Image, Container, Row, Col } from "react-bootstrap";
import '../../App.css';

import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';


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
                                </Link>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <h1>Seja Bem Vindo Cliente</h1>
                                <p>Acordou atrasado para ir ao trabalho e não tem tempe de tomar um café, mas consegue ir a padaria?</p>
                                <p>Quer ganhar um tempinho antes daquela aula e ver aquele video que você deixou pra mais tarde?</p>
                                <p>Pois saiba que com o App Bake Fast você consegue fazer tudo isso! </p>
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
