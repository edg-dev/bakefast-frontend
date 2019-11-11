import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

import { Image, Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';

function VizualizarPadaria() {
    return (
        <div className="App">
            <header className="App-header">
            <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <div>
                                    <h2>Padaria Vesúvio</h2>
                                </div>
                                <div>
                                    <h4>Cardapio</h4>
                                    <Image src="logo.src" />
                                </div>
                                <div><ButtonInfo button="Vizualizar Produtos" /></div>
                                <div><Link to="/Pedidos/"><ButtonPrimary button="Fazer Pedido!" /></Link></div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        </div>
    );
}

export default VizualizarPadaria;


