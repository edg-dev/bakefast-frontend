import React from 'react';
import '../../App.css';

import { Table, Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';


function Notificacoes() {
    return (
        <div className="App">
            <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                    <h2>Notificações</h2>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Tipo</th>
                                                    <th>Texto</th>
                                                    <th>Ação</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Bolos</td>
                                                    <td>"Bolos Fresquinhos ..."</td>
                                                    <td><p>Editar</p></td>
                                                </tr>
                                                <tr>
                                                    <td>Pães</td>
                                                    <td>"Pães acabam de sair ..."</td>
                                                    <td><p>Editar</p></td>
                                                </tr>
                                                <tr>
                                                    <td>Doces</td>
                                                    <td>"Bolos, tortas e etc ..."</td>
                                                    <td><p>Editar</p></td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                    <label>
                                        Tipo da Notificação: 
                                                <input type="text" name="notificacao" placeholder="" />
                                    </label>

                                    <label>
                                        Texto da Notificação: 
                                                <input type="text" name="textoNotificacao" placeholder="" />
                                    </label>

                                <ButtonPrimary button="Realizar Pedido" />

                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        </div>
    );
}

export default Notificacoes;
