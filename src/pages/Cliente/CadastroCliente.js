import React from 'react';

import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import api from '../../config/api'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PhoneIcon from '@material-ui/icons/Phone';

import '../../App.css';

export default class CadastroCliente extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            nome: '',
            telefone: '',
            usuario: '',
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

        api.post('cliente/', 
        {
            nome: this.state.nome,
            telefone: parseInt(this.state.telefone),
            usuario: {
                username: this.state.username,
                senha: this.state.senha
            }
        }, { headers: { 'Content-type': 'application/json' }})
    
        .then(res => {
            this.shoot('Cliente cadastrado com sucesso!');
            this.props.history.push('/login');
            console.log(res);
            console.log(res.data);
        })
        .catch(error => {
            this.shoot('Houve algum erro!');
            console.log(error.response);
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
                                        <h3>Cadastre aqui!</h3>
                                    </div>
                                    <br />

                                    <Form.Group controlId="nome">
                                        <PersonIcon style={{marginTop: 25, marginRight: 15}}/>
                                        <TextField type="text" name="nome" value={this.state.value} onChange={this.handleChange} label="Nome:" style={{width: 140}}/>                                                            
                                    </Form.Group>

                                    <Form.Group controlId="telefone">
                                        <PhoneIcon style={{marginTop: 25, marginRight: 15}}/>
                                        <TextField type="number" name="telefone" value={this.state.value} onChange={this.handleChange} label="Telefone:" style={{width: 140}}/>                                                            
                                    </Form.Group>

                                    <br />
                                    <h4>Informações de Login</h4>
                                    <br />
                                    <Form.Group controlId="username">
                                        <PersonIcon style={{marginTop: 25, marginRight: 15}}/>
                                        <TextField type="text" name="username" value={this.state.value} onChange={this.handleChange} label="Username:" style={{width: 140}}/>                                                            
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
