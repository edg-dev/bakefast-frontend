import React from 'react';
import {Container, Row, Col, Form } from "react-bootstrap";
import '../../App.css';
import api from '../../config/api'
import ButtonPrimary from '../../components/cssComponents/buttonSubmit';

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
            this.shoot('Padaria cadastrada com sucesso!');
            this.props.history.push('/login');
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

                                <Form onSubmit={this.handleSubmit}>
                                    <div>
                                        <h4>Cadastre sua Padaria aqui!</h4>
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

                                    <h4>Informações de Login</h4>

                                    <Form.Group controlId="username">
                                          <Form.Label>Login</Form.Label>
                                        <Form.Control type="text" name="username" placeholder="Username" value={this.state.value} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="senha">
                                        <Form.Label>Senha</Form.Label>
                                        <Form.Control type="password" name="senha" placeholder="Senha" value={this.state.value} onChange={this.handleChange} />
                                    </Form.Group>

                                    <div>
                                        <ButtonPrimary type="submit" button="Cadastrar" >
                                            Cadastrar
                                        </ButtonPrimary>
                                    </div>
                                    <p></p>
                                    
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
