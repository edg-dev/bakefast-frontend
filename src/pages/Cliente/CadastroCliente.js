import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Image, Container, Row, Col, Form } from "react-bootstrap";
import '../../App.css';
import { thisExpression } from '@babel/types';
import axios from 'axios';
import api from '../../config/api'
import ButtonPrimary from '../../components/cssComponents/buttonSubmit';

export default class CadastroCliente extends React.Component {
    shoot = (a) => {
        alert(a);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>

                                <Form onSubmit={this.handleSubmit}>
                                    <div>
                                        <h2>Cadastre aqui!</h2>
                                    </div>
                                    <Form.Group controlId="nome">
                                        <Form.Label>Nome:</Form.Label>
                                        <Form.Control type="text" name="nome" placeholder="Nome" value='' onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="telefone">
                                        <Form.Label>Telefone:</Form.Label>
                                        <Form.Control type="number" name="telefone" placeholder="Telefone" value='' onChange={this.handleChange} />
                                    </Form.Group>

                                    <h2>Informações de Login</h2>

                                    <Form.Group controlId="username">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control type="text" name="username" placeholder="Username" value='' onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="senha">
                                        <Form.Label>Senha</Form.Label>
                                        <Form.Control type="password" name="senha" placeholder="Senha" value='' onChange={this.handleChange} />
                                    </Form.Group>

                                    <div>
                                        <ButtonPrimary onClick={() => this.shoot("Cliente Cadastrado com Sucesso")} type="submit" button="Cadastrar" >
                                            Cadastrar
                                        </ButtonPrimary>
                                    </div>
                                </Form>

                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}
