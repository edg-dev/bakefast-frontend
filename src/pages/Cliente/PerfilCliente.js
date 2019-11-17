import React from 'react';

import '../../App.css';
import api from '../../config/api';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import Produtos from '../../components/customComponents/produtos';

import { Link } from "react-router-dom";
import { Container, Row, Col, Table, Dropdown } from 'react-bootstrap';

export default class PerfilCliente extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            nome: localStorage.getItem('@bakefast/username'),
            res: this.props.dados,
            pedidos: []
        }
    }   

    componentDidMount(){
        let idCliente = localStorage.getItem('@bakefast/idCliente');
        api.get(`pedido?idCliente=${idCliente}&limit=5`)
        .then(res => {
            console.log(res.data);

            for(var key in res.data){
                this.setState({
                    pedidos: [...this.state.pedidos, res.data[key]]
                });
            }
            console.log(this.state.pedidos);
        })
        .catch(error => {
            console.log(error.response);
        });
    }
    
    shoot = (a) => {
        alert(a);
    }

    galeria = event => {
        this.props.history.push('/Galeria');
    }

    render (){  
        return (     
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <h3>Logado como: {this.state.nome}</h3>

                                <p>Veja os produtos das padarias!</p>
                                <button onClick={this.galeria}>
                                    Visualizar
                                </button>

                                <h4>Pedidos Recentes:</h4>
                                {this.state.pedidos.map(pedidos =>
                                   <Produtos pedidos={pedidos.produtos}></Produtos>
                                )}
                                
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

