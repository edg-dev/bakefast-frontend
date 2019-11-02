import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {Dropdown, Image, Container, Row, Col, Form } from "react-bootstrap";
import '../App.css';
import logo_color from "../images/logo_256x.png";
import ButtonSubmit from '../components/cssComponents/buttonSubmit';

import api from '../config/api';

export default class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            senha: '',
            tipoLogin: ''
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

        if(this.state.tipoLogin == 1){
            //Loga como usuário
            api.post('cliente/login', {
                username: this.state.username,
                senha: this.state.senha
            })
            .then(res => {
                //redireciona
                console.log('cliente logado');
                console.log(res);
            })
            .catch(error => {
                console.log(error.response);
            })
        }

        if(this.state.tipoLogin == 2){
            //Loga como padaria
            api.post('padaria/login', {
                username: this.state.username,
                senha: this.state.senha
            })
            .then(res => {
                console.log('padaria logada');
                console.log(res);
            })
            .catch(error => {
                console.log(error.response);
            })
        }
    }



    render(){
        return (
            <div className="App">
                <header className="App-header">
                        <Container>
                            <Row>
                                <Col></Col>
                                <Col xs={8}>
                                    <div><Image src={logo_color} roundedCircle thumbnail/></div>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="formUsername">
                                            <Form.Label>Usuário: </Form.Label>
                                            <Form.Control type="text" placeholder="Username" name="username" value={this.state.value} onChange={this.handleChange}/>
                                        </Form.Group>
                                        <Form.Group controlId="formSenha">
                                            <Form.Label>Senha: </Form.Label>
                                            <Form.Control type="password" placeholder="Senha" name="senha" value={this.state.value} onChange={this.handleChange}/>
                                        </Form.Group>

                                        <h3>Selecione o tipo de login</h3>
                                        <Form.Group>
                                            <select name="tipoLogin" value={this.state.value} onChange={this.handleChange}>
                                                <option value="1">Cliente</option>
                                                <option value="2">Padaria</option>
                                            </select>
                                        </Form.Group>

                                        <ButtonSubmit button="Login"/>
                                </Form>
                                <div><Link to="/CadastroCliente/">Não é Cadastrado?</Link></div>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                </header>
            </div>
        );
    }
}
