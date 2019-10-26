import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';
import { Container, Row, Col, Table, Dropdown } from 'react-bootstrap';


function PerfilCliente() {
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <h1>Logado como: Usuário</h1>
                                <label>Buscar Padarias</label>

                            <div>
                                <h3>Padarias favoritas:</h3>

                                <Dropdown>
                                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                        Selecionar padaria
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">ElisMarina</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Vesúvio</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Pão Quente</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                                <h3>Pedidos Recentes:</h3>
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
                                
                                <div><Link to="/RealizarPedido/"><ButtonPrimary button="Fazer Pedido"/></Link></div> 

                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </header>
            </div>
        );
}

export default PerfilCliente;
