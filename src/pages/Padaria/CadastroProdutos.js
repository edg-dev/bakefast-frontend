import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

import { Image, Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';

function CadastroProdutos() {
    return (
        <div className="App">
            <header className="App-header">
            <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                    <h2>Cadastre aqui imagens de seus produtos:</h2>
                                <p>
                                    Quem nunca ficou com vontade de comer aquele pedaço de bolo só de ver o chocolate escorrendo pela massa? Nós entendemos muito bem,
                                    e por isso você pode colocar fotos de seus produtos, para que os clientes tambem fiquem com água na boca!
                                </p>
                                    <ButtonPrimary button="Upload de Imagens" />
                                <div>
                                    <Image src="" />
                                </div>
                                <div>
                                    <Link to="/"><ButtonPrimary button="Cadastrar Imagens" /></Link>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>




            </header>
        </div>
    );
}

export default CadastroProdutos;
