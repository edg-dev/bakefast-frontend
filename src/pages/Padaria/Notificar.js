import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';

function Notificar() {
    return (
        <div className="App">
            <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                    <h3>Notificações</h3>
                                    <p>Acabaram de sair bolos do forno! <ButtonPrimary button="Notificar" /></p>
                                    <p>Pães quentinhos do forno! <ButtonPrimary button="Notificar" /></p>
                                    <p>Notificações cadastradas : 3/3</p>
                                    <Link to="">
                                        <Button variant="info" disabled> Gerenciar Notificações </Button>
                                    </Link>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        </div>
    );
}

export default Notificar;
