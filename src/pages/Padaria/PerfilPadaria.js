import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

import { Table, Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';

function PerfilPadaria() {
    return (
        <div className="App">
            <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>

                                    <h1>Logado como: Vesúvio Padarias</h1>
                                    <h3>Seus Pedidos:</h3>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                <th>Produto</th>
                                                <th>Quantidade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>Pão Francês</td>
                                                <td>10</td>
                                                </tr>
                                                <tr>
                                                <td>Pão de Queijo</td>
                                                <td>2</td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                    <p>Foram realizados X pedidos nos ultimos 30min:</p>
                                    <p>Acesse e dispare notificações aos seus clientes:
                                        <div><Link to="/Notificar/"><ButtonPrimary button="Notificar"/></Link></div></p>
                                    <p>Cadastre uma imagem de seu cardápio:
                                        <div><Link to="/CadastroCardapio/"><ButtonPrimary button="Cadastrar"/></Link></div></p>
                                    <p>Cadastre imagens de seus produtos:
                                        <div><Link to="/CadastroProdutos/"><ButtonPrimary button="Cadastrar"/></Link></div></p>
                                    <p>Veja informações sobre vendas:
                                        <div><ButtonInfo button="Informações"/></div></p>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>



            </header>
        </div>
    );
}

export default PerfilPadaria;