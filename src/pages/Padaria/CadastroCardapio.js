import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import { Image, Container, Row, Col } from "react-bootstrap";

function CadastroCardapio() {
    return (
        <div className="App">
            <header className="App-header">
            <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={6}>
                                <div>
                                    <h2>Coloque aqui uma imagem de seus cardápio contendo seus produtos.</h2>
                                </div>
                                <p>
                                    Para facilitar sua vida e a dos clientes, os produtos não necessitam ser cadastrados, evitando assim gasto de tempo desnecessário em cadastro ou alteração de produtos para
                                    que você foque em suas vendas.
                                </p>
                                <ButtonPrimary button="Upload de Imagem" />
                                <div>
                                    <Image src="" />
                                </div>
                                <div><Link to="/CadastroProdutos"><ButtonPrimary button="Cadastrar Cardápio" /></Link></div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        </div>
    );
}

export default CadastroCardapio;
