import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

import { Image, Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';

function IntrocucaoPadaria() {
    return (
        <div className="App">
            <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                            
                                <h4>Seus cliente agora poderão fazer pedidos antecipados!</h4>                    
                                <img src="" /><p>Aumente a quantidade de vendas em horários de pico.</p>
                         
                                <p>
                                    Com o App Bake Fast, seus cliente te encontram em nossa rede de padarias cadastradas em nossa rede de padarias cadastradas,
                                    efetuam "pedidos" de maneira antecipada e agilizam processos de pagamento.
                                </p>
                          
                                <p>Menos Filas</p><p>Mais produtos vendidos!</p><p>Mais clientes satisfeitos!</p><img src="" />
                            

                            <Link to="/CadastroPadaria/"><ButtonPrimary button="Cadastrar Agora"/></Link>

                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        </div>
    );
}

export default IntrocucaoPadaria;

