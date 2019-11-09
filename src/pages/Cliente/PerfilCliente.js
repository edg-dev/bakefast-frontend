import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Table, Dropdown } from 'react-bootstrap';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
//import { ReactComponent } from '*.svg';

export default class PerfilCliente extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            nome: this.props.nome,
            res: this.props.dados
        }
    }   


    componentDidMount(){
        //console.log(this.state.res);
    }
    
    shoot = (a) => {
        alert(a);
    }

    render (){  
        return (     
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <h3>Logado como: Usuário</h3>
                                <label>Buscar Padarias</label>

                            <div>
                                <h4>Padarias favoritas:</h4>
          
                                <Dropdown>
                                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                        Selecionar padaria
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">ElisMarina</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Vesúvio</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Pão Quente</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                                <h4>Pedidos Recentes:</h4>
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
                                
                                <div><Link to="/RealizarPedido/"><ButtonPrimary button="Fazer Pedido"/></Link></div> 

                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </header>
            </div>
        )
    }
}

