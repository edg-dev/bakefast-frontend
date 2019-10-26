import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {Dropdown, Image, Container, Row, Col, Form } from "react-bootstrap";
import '../App.css';
import logo_color from "../images/logo_256x.png";
import ButtonPrimary from '../components/cssComponents/buttonPrimary';

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
            api.get('cliente/${this.state.username}/${this.state.state}')
            .then(res => {
                //redireciona
                console.log(res);
            })
            .catch(error => {
                console.log(error.response);
            })
        }

        if(this.state.tipoLogin == 2){
            //Loga como padaria
            api.get('padaria/${this.state.username}/${this.state.state}')
            .then(res => {
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
                                <Col xs={4}>
                                    <div><Image src={logo_color} roundedCircle thumbnail/></div>
                                    <Form>
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

                                        <ButtonPrimary button="Login"/>
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
