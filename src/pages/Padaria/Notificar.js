import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';

function Notificar() {
    return (
        <div className="App">
            <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                    <h2>Notificações</h2>
                                    <p>Acabaram de sair bolos do forno! <ButtonPrimary button="Notificar" /></p>
                                    <p>Pães quentinhos do forno <ButtonPrimary button="Notificar" /></p>
                                    <p>Notificações cadastradas : 3/3</p>
                                    <Link to="/Notificacoes/"><ButtonInfo button="Gerenciar Notificações" /></Link>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        </div>
    );
}

export default Notificar;
