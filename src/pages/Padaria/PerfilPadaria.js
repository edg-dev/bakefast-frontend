import React from 'react';

import '../../App.css';
import api from '../../config/api';


import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';

import { Link } from "react-router-dom";
import { Table, Container, Row, Col } from "react-bootstrap";
const axios = require('axios');
export default class PerfilPadaria extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            pedidos: []
        }
    }

    componentDidMount(){
        let idPadaria = localStorage.getItem('@bakefast/idPadaria');
        console.log(`pedido?idPadaria=${idPadaria}`);
        axios.get('http://localhost:4000/api/pedido?idPadaria=5db4a00f8f03184a445b612f')
        .then(res => {
            const pedidos = res.data.produtos;
            console.log(res.data);
            this.setState({pedidos: pedidos});
            console.log(pedidos);
            
        })
        
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                        <Container>
                            <Row>
                                <Col></Col>
                                <Col xs={8}>
    
                                    <h3>Logado como: Vesúvio Padarias</h3>
                                    <p></p>
                                        <h4>Seus Pedidos:</h4>
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                    <th>Produto</th>
                                                    <th>Quantidade</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td>Pão Francês</td>
                                                    <td>10</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Pão de Queijo</td>
                                                    <td>2</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
    
                                        <p>Foram realizados X pedidos nos ultimos 30min:</p>
                                        <p>Acesse e dispare notificações aos seus clientes:
                                            <div><Link to="/Notificar/"><ButtonPrimary button="Notificar"/></Link></div></p>
                                        <p>Cadastre uma imagem de seu cardápio:
                                            <div><Link to="/CadastroCardapio/"><ButtonPrimary button="Cadastrar"/></Link></div></p>
                                        <p>Veja informações sobre vendas:
                                            <div><Link to="/InformacoesEstatisticas/"><ButtonInfo button="Informações" /></Link></div></p>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
    
    
    
                </header>
            </div>
        );
    }
}

