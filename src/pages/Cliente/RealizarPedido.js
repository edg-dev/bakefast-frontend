import React, { Component } from 'react';
import '../../App.css';

import {Link} from 'react-router-dom';
import { Container, Row, Col, Table, Dropdown } from 'react-bootstrap';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';

function RealizarPedido() {
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={6}>
                                
                            <h3>Seu Pedido foi:</h3>

                        <div>
                            <Table responsive>
                                <thead>
                                    <tr>
                                    <th>Produto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Pão Francês</td>
                                    </tr>
                                    <tr>
                                    <td>Pão de Queijo</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                        <div>
                            <h4>Deseja realizar o pedido?</h4>
                            <div><Link to="/"><ButtonPrimary button="Confirmar"/></Link></div> 
                            <div><Link to="/PerfilCliente/"><ButtonPrimary button="Voltar"/></Link></div> 
                        </div>
                            </Col>
                            <Col></Col>
                        </Row>
                </Container>



                
            </header>
        </div>
    );
}

export default RealizarPedido;