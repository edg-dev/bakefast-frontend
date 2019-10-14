import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Button, Image, Container, Row, Col } from "react-bootstrap";
import '../../App.css';


function SejaBemVindoCliente() {
        return (
            <div className="App-header">
                 <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={7}>
                                <h1>Seja Bem Vindo Cliente</h1>
                                <p>Acordou atrasado para ir ao trabalho e não tem tempe de tomar um café, mas consegue ir a padaria?</p>
                                <p>Quer ganhar um tempinho antes daquela aula e ver aquele video que você deixou pra mais tarde?</p>
                                <p>Pois saiba que com o App Bake Fast você consegue fazer tudo isso! </p>
                                    <Link to="/ModoDeUsar/">
                                        <Button variant="info">Modo de usar</Button>
                                    </Link>
                            </Col>
                            <Col xs={4}>
                                <p>Já é Cadastrado? </p>
                                <Link to="/Login">
                                    <Button variant="primary">Login</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
            </div>
        );
}

export default SejaBemVindoCliente;
