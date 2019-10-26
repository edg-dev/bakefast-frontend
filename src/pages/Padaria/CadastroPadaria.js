import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Image, Container, Row, Col, Form } from "react-bootstrap";
import '../../App.css';
import { thisExpression } from '@babel/types';
import axios from 'axios';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';


export default class CadastroPadaria extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            telefone: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });           
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post('http://localhost:4000/api/padaria/', 
            {            
                nome: this.state.nome,
                telefone: parseInt(this.state.telefone),
                endereco: {
                    rua: this.state.rua,
                    numero: parseInt(this.state.numero),             
                    bairro: this.state.bairro,
                    complemento: this.state.complemento,
                }
            }, 
            { headers: { 'Content-type': 'application/json' }})

        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error.response)
        });
    }

    render() {  
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={4}>
                                <Form>
                                    <div>
                                        <h2>Cadastre sua Padaria aqui!</h2>
                                    </div>
                                    <Form.Group controlId="nome">
                                        <Form.Label>Nome:</Form.Label>
                                        <Form.Control type="text" name="nome" placeholder="Nome" value={this.state.value} onChange={this.handleChange}/>
                                    </Form.Group>

                                    <Form.Group controlId="telefone">
                                        <Form.Label>Telefone:</Form.Label>
                                        <Form.Control type="number" name="telefone" placeholder="Telefone" value={this.state.value} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="rua">
                                        <Form.Label>Rua:</Form.Label>
                                        <Form.Control type="text" name="rua" placeholder="Rua" value={this.state.value} onChange={this.handleChange}/>
                                    </Form.Group>

                                    <Form.Group controlId="numero">
                                         <Form.Label>Número:</Form.Label>
                                        <Form.Control type="number" name="numero" placeholder="Número" value={this.state.value} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="complemento">
                                          <Form.Label>Complemento</Form.Label>
                                        <Form.Control type="text" name="complemento" placeholder="Complemento" value={this.state.value} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="bairro">
                                        <Form.Label>Bairro</Form.Label>
                                        <Form.Control type="text" name="bairro" placeholder="Bairro" value={this.state.value} onChange={this.handleChange} />
                                    </Form.Group>

                                    <div>
                                        <ButtonPrimary type="submit" button="Cadastrar" />
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
