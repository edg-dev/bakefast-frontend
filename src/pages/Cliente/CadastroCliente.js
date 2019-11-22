import React from 'react';

import { Container, Row, Col, Form } from "react-bootstrap";

import api from '../../config/api'
import ButtonSubmit from '../../components/cssComponents/buttonSubmit';

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

                                <Form onSubmit={this.handleSubmit}>
                                    <div>
                                        <h3>Cadastre aqui!</h3>
                                    </div>
                                    <Form.Group controlId="nome">
                                        <Form.Label>Nome:</Form.Label>
                                        <Form.Control type="text" name="nome" placeholder="Nome" value={this.state.value} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="telefone">
                                        <Form.Label>Telefone:</Form.Label>
                                        <Form.Control type="number" name="telefone" placeholder="Telefone" value={this.state.value} onChange={this.handleChange} />
                                    </Form.Group>

                                    <h4>Informações de Login</h4>

                                    <Form.Group controlId="username">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control type="text" name="username" placeholder="Username" value={this.state.value} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="senha">
                                        <Form.Label>Senha</Form.Label>
                                        <Form.Control type="password" name="senha" placeholder="Senha" value={this.state.value} onChange={this.handleChange} />
                                    </Form.Group>

                                    <div>
                                        <ButtonSubmit button="Cadastrar" >
                                            Cadastrar
                                        </ButtonSubmit>
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
