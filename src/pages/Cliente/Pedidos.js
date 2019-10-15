import React, { Component } from 'react';
import '../../App.css';

import {Dropdown, Table, Container, Row, Col, Button } from "react-bootstrap";

function Pedido() {
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={6}>

                                <h1>Fazer Pedido</h1>

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

                            </Col>
                            <Col></Col>
                        </Row>
                        <Row><Col><p></p></Col></Row>
                    
                        <Row>
                        <Col></Col>
                            <Col xs={8}>
                            <h3>Produtos</h3>

                            <Table responsive>
                                <thead>
                                    <tr>
                                    <th>Produto</th>
                                    <th>Valor</th>
                                    <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Pão Francês</td>
                                    <td>R$0.25</td>
                                    <td>4</td>
                                    </tr>
                                    <tr>
                                    <td>Pão de Queijo</td>
                                    <td>R$0.80</td>
                                    <td>10</td>
                                    </tr>
                                </tbody>
                            </Table>
                            </Col>
                        <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <h3>Tempo estimado de chegada:</h3>
                                <label>20 minutos</label>

                                <p>Importante: O tempo de chegada é o tempo que você estima chegar a padaria para pegar o pedido.</p>
                                
                                <Button type="submit" variant="primary">Pedir</Button> 
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </header>
            </div>
        );
}

export default Pedido;
