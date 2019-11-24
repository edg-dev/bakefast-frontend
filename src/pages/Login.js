import React from 'react';

import { Link } from "react-router-dom";
import { Image, Container, Row, Col, Form } from "react-bootstrap";

import api from '../config/api';
import logo_color from "../images/logo_256x.png";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

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
            if(res.data === ""){

                //Se não conseguir, tenta como padaria
                api.post('padaria/login', {
                    username: this.state.username,
                    senha: this.state.senha
                })
                .then(res => {
                    if(res.data === ""){
                        //Se não conseguir, faz a validação
                        console.log(res);                      
                        localStorage.setItem('@bakefast-frontend/username', null);
                        this.loginFailed();
                    } else{
                        console.log(res);
                        localStorage.setItem('@bakefast/username', res.data.nome.toString());
                        localStorage.setItem('@bakefast/idPadaria', res.data._id.toString());
                        this.props.history.push('/PerfilPadaria');
                    }
                })
                .catch(error => {
                    console.log(error.response);
                    this.shoot('Erro: ' + error.response);
                })

            } else {
                console.log(res);
                localStorage.setItem('@bakefast/idCliente', res.data._id.toString())
                localStorage.setItem('@bakefast/username', res.data.nome.toString());
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
                                    <div>
                                        <Image alt="logo" src={logo_color} roundedCircle thumbnail/>
                                    </div>
                                        <Form onSubmit={this.handleSubmit}>

                                            <Form.Group controlId="formUsername">
                                                <PersonIcon style={{marginTop: 25, marginRight: 15}}/>
                                                <TextField type="text" name="username" value={this.state.value} onChange={this.handleChange} id="standard-basic" label="Usuário:" style={{width: 150}}/>                                                            
                                            </Form.Group>

                                            <Form.Group controlId="formSenha">
                                                <VpnKeyIcon style={{marginTop: 25, marginRight: 15}}/>
                                                <TextField type="password" name="senha" value={this.state.value} onChange={this.handleChange} id="standard-basic2" label="Senha:" style={{width: 150}}/>        
                                            </Form.Group>

                                        <Button type="submit"> Login </Button>
                                    </Form>

                                    <br />
                                                                   
                                    <h4>Não é cadastrado?</h4>

                                    <br />

                                    <div>
                                        <Link to="/CadastroCliente/">Cadastrar como cliente</Link>
                                    </div>

                                    <br />

                                    <div>
                                        <Link to="/IntroducaoPadaria/">Cadastrar como padaria</Link>
                                    </div>
                                        

                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                </header>
            </div>
        );
    }
}
