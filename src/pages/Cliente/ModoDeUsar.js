import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

import { Container, Row, Col } from "react-bootstrap";
import ButtonSucess from '../../components/cssComponents/buttonSucess';

function ModoDeUsar() {
        return (
            <div className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <h5>Então se interessou pelo App hein? Vamos colocar manteiga no pão?</h5>
                                <p> Primeiro de tudo ache uma padaria no aplicativo bem proxima a você.</p>
                                <p>Depois, procure o que voce deseja comprar, baseado no que a padaria tem a oferecer.</p>
                                <p>Crie seu pedido e pegue o pombo, digo, o pão!</p>
                                <Link to="/RealizarPedido/">
                                    <ButtonSucess button="Entendi"/>
                                </Link>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </div>
        );
}

export default ModoDeUsar;