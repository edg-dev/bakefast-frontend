import React from 'react';

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Button from '@material-ui/core/Button';
import '../../App.css';

function SejaBemVindoCliente() {
        return (
            <div className="App-header">
                 <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <p>Já é cadastrado? </p>
                                <Link to="/Login">
                                    <Button style={{color: '#ffbf00'}}>Fazer login</Button>
                                    <p></p>
                                </Link>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <Col md>
                                    <h3>Seja bem vindo!</h3>
                                    <p>Acordou atrasado para ir ao trabalho e não tem tempo de tomar um café, mas consegue ir a padaria?</p>
                                    <p>Quer ganhar um tempinho antes daquela aula e ver aquele vídeo que você deixou pra mais tarde?</p>
                                    <p>Saiba que com o App Bake Fast você consegue fazer tudo isso! </p>
                                        <Link to="/ModoDeUsar/">
                                            <Button style={{color: '#ffbf00'}}> Modo de usar</Button>
                                        </Link>
                                </Col>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </div>
        );
}

export default SejaBemVindoCliente;
