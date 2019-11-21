import React from 'react';

import '../../App.css';

import { Container, Form } from "react-bootstrap";

import ButtonSubmit from '../../components/cssComponents/buttonSubmit';
import axios from 'axios';

export default class Notificar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tipo: null,
            texto: null
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
        let texto = this.state.texto;
        let titulo = localStorage.getItem('@bakefast/username') + ' - ' + this.state.tipo;

        axios.post('https://fcm.googleapis.com/fcm/send', 
        {
            "notification": {
                "title": titulo,
                "body": texto,
                "click_action": "http://localhost:3000/perfilCliente",
                "icon": "http://localhost:3000/icon-192x192.png"
            },
            "to": "/topics/all"
        }, {
            headers: {
                "Authorization": "key=AAAAPxpI230:APA91bEgNkyS4ES0V-gEFf-_xMb4cqNMCJVtPufACihrjWM8rK4wT408q0mSOjzKf0vLCbLE4t-BlGgbRtASw7KSanUi3zQrOXZw9YPLXZxcQ3BQrPRyyItKzHOyxSRVqNwc4BdzhMhi"
            }
        })
        .then(res => {
            console.log(res);
            this.shoot('Notificação enviada');
        })
        .catch(err => {
            console.log('Erro: ', err)
        });
    }

    shoot = (a) => {
        alert(a);
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                        <Container>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="form">
                                    <Form.Label>Tipo: </Form.Label>
                                    <Form.Control type="text" placeholder="Tipo da notificação" name="tipo" value={this.state.value} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formSenha">
                                    <Form.Label>Texto: </Form.Label>
                                    <Form.Control type="text" placeholder="Texto da notificação" name="texto" value={this.state.value} onChange={this.handleChange}/>
                                </Form.Group>

                                <ButtonSubmit button="Notificar"></ButtonSubmit>
                            </Form>
                        </Container>
                </header>
            </div>
        );
    }
}
