import React from 'react';

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Button from '@material-ui/core/Button';

import '../../App.css';

function IntrocucaoPadaria() {
    return (
        <div className="App">
            <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <Col md>
                                    
                                    <h3>Pedidos antecipados!</h3>                    
                                    <p>Aumente a quantidade de vendas em horários de pico.</p>
                            
                                    <p>
                                        Com o App BakeFast, seus cliente te encontram em nossa rede de padarias cadastradas em nossa rede de padarias cadastradas,
                                        efetuam "pedidos" de maneira antecipada e agilizam processos de pagamento.
                                    </p>

                                <Link to="/CadastroPadaria/">
                                    <Button style={{color: 'blue'}}>Cadastrar agora</Button>
                                </Link>
                            </Col>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        </div>
    );
}

export default IntrocucaoPadaria;

