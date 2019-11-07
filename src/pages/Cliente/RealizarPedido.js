import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

import {Link} from 'react-router-dom';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';
import ButtonWarning from '../../components/cssComponents/buttonPrimary';
import ButtonSubmit from '../../components/cssComponents/buttonSubmit';

export default class RealizarPedido extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tempo: ''
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
    }

    //Informações importantes
    //<form onSubmit={this.handleSubmit}> => como o form vai dar o submit
    //<input type="text" name="name" onChange={this.handleChange}/> => atualiza o estado toda vez que for alterado
    render(){
    
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                            <Row>
                                <Col></Col>
                                <Col xs={8}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlID="formTempoChegada">
                                        <Form.Label>Tempo de Chegada: </Form.Label>
                                        <Form.Control type="number" placeholder="Tempo de chegada" name="tempo" value={this.state.value} onChange={this.handleChange}/>
                                    </Form.Group>
                                </Form>
                                <h3>Seu Pedido foi:</h3>
    
                            <div>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                        <th>Produto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Pão Francês</td>
                                        </tr>
                                        <tr>
                                        <td>Pão de Queijo</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
    
                            <div>
                                <h4>Deseja realizar o pedido?</h4>
                                <div><Link to="/"><ButtonWarning button="Confirmar"/></Link></div> 
                                <div><Link to="/PerfilCliente/"><ButtonWarning button="Voltar"/></Link></div> 
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
