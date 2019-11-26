import React from 'react';

import {Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import api from '../../config/api'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PhoneIcon from '@material-ui/icons/Phone';
import ExposureZeroIcon from '@material-ui/icons/ExposureZero';
import PowerInputIcon from '@material-ui/icons/PowerInput';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';

import '../../App.css';

export default class CadastroPadaria extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            telefone: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            username: '',
            senha: ''
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

        api.post('padaria/', 
            {            
                nome: this.state.nome,
                telefone: parseInt(this.state.telefone),
                endereco: {
                    rua: this.state.rua,
                    numero: parseInt(this.state.numero),             
                    bairro: this.state.bairro,
                    complemento: this.state.complemento,
                },
                usuario: {
                    username: this.state.username,
                    senha: this.state.senha
                }
            }, 
            { headers: { 'Content-type': 'application/json' }})

        .then(res => {
            console.log(res);
            console.log(res.data);
            this.props.history.push('/Login');
        })
        .catch(error => {
            console.log(error.response)
        });
    }
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
                                <Col md>
                                    <Form onSubmit={this.handleSubmit}>
                                        <div>
                                            <h4>Cadastre sua Padaria aqui!</h4>
                                        </div>

                                        <Form.Group controlId="nome">
                                            <PersonIcon style={{marginTop: 25, marginRight: 15}}/>
                                            <TextField type="text" name="nome" value={this.state.value} onChange={this.handleChange} label="Nome:" style={{width: 140}}/>                                                            
                                        </Form.Group>

                                        <Form.Group controlId="telefone">
                                            <PhoneIcon style={{marginTop: 25, marginRight: 15}}/>
                                            <TextField type="number" name="telefone" value={this.state.value} onChange={this.handleChange} label="Telefone:" style={{width: 140}}/>                                                            
                                        </Form.Group>

                                        <Form.Group controlId="rua">
                                            <PowerInputIcon style={{marginTop: 25, marginRight: 15}}/>
                                            <TextField type="text" name="rua" value={this.state.value} onChange={this.handleChange} label="Rua:" style={{width: 140}}/>                                                            
                                        </Form.Group>

                                        <Form.Group controlId="numero">
                                            <ExposureZeroIcon style={{marginTop: 25, marginRight: 15}}/>
                                            <TextField type="number" name="numero" value={this.state.value} onChange={this.handleChange} label="Número:" style={{width: 140}}/>                                                            
                                        </Form.Group>

                                        <Form.Group controlId="complemento">
                                            <NaturePeopleIcon style={{marginTop: 25, marginRight: 15}}/>
                                            <TextField type="text" name="complemento" value={this.state.value} onChange={this.handleChange} label="Complemento:" style={{width: 140}}/>                                                            
                                        </Form.Group>

                                        <Form.Group controlId="bairro">
                                            <HomeWorkIcon style={{marginTop: 25, marginRight: 15}}/>
                                            <TextField type="text" name="bairro" value={this.state.value} onChange={this.handleChange} label="Bairro:" style={{width: 140}}/>                                                            
                                        </Form.Group>


                                        <h4>Informações de Login</h4>

                                        <Form.Group controlId="username">
                                            <PersonIcon style={{marginTop: 25, marginRight: 15}}/>
                                            <TextField type="text" name="username" value={this.state.value} onChange={this.handleChange} label="Usuário:" style={{width: 140}}/>                                                            
                                        </Form.Group>

                                        <Form.Group controlId="senha">
                                            <VpnKeyIcon style={{marginTop: 25, marginRight: 15}}/>
                                            <TextField type="password" name="senha" value={this.state.value} onChange={this.handleChange} label="Senha:" style={{width: 140}}/>                                                            
                                        </Form.Group>

                                        <div>
                                            <Link to="/Login/">
                                                <Button style={{color: 'red'}}>
                                                    Voltar
                                                </Button>
                                            </Link>

                                            <Button type="submit" style={{color: 'blue'}}>
                                                Cadastrar
                                            </Button>
                                        </div>
                                        <p></p>
                                        
                                    </Form>
                                </Col>
                                </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}
