import { Link } from "react-router-dom";
import { Image, Container, Row, Col, Form } from "react-bootstrap";

import React from 'react';
import api from '../config/api';
import logo_color from "../images/logo_256x.png";
import ButtonSubmit from '../components/cssComponents/buttonSubmit';

import '../App.css';

export default class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
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

        //Tenta logar como cliente
        api.post('cliente/login', {
            username: this.state.username,
            senha: this.state.senha
        })
        .then(res => {
            if(res.data == ""){

                //Se não conseguir, tenta como padaria
                api.post('padaria/login', {
                    username: this.state.username,
                    senha: this.state.senha
                })
                .then(res => {
                    if(res.data == ""){
                        //Se não conseguir, faz a validação
                        console.log(res);
                        localStorage.setItem('@bakefast-frontend/username', null);
                        this.loginFailed();
                    } else{
                        console.log(res);
                        localStorage.setItem('@bakefast/username', JSON.stringify(res.data));
                        localStorage.setItem('@bakefast/idPadaria', JSON.stringify(res.data._id));
                        this.props.history.push('/PerfilPadaria');
                    }
                })
                .catch(error => {
                    console.log(error.response);
                    this.shoot('Erro: ' + error.response);
                })

            } else {
                console.log(res);
                localStorage.setItem('@bakefast-frontend/username', JSON.stringify(res.data));
                this.props.history.push('/PerfilCliente');
            }                          
        })
        .catch(error => {
            console.log(error.response);
            this.shoot('Erro: ' + error.response);
        });   
    }

    loginFailed = () => {
        this.shoot('Falha no login! Usuário não encontrado!');       
    }
    
    shoot = (a) => {
        alert(a);
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

                                    <ButtonSubmit button="Login" />
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
