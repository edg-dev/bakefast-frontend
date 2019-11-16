import React from 'react';

import '../../App.css';

import api from '../../config/api';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import ButtonInfo from '../../components/cssComponents/buttonInfo';
import Produtos from '../../components/customComponents/produtos';

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default class PerfilPadaria extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            nomePadaria: localStorage.getItem('@bakefast/username'),
            idPedido: '',
            pedidos: []
        }
    }

    componentDidMount(){
        let idPadaria = localStorage.getItem('@bakefast/idPadaria');

        api.get(`pedido?idPadaria=${idPadaria}`)
        .then(res => {
            console.log(res.data);

            for(var key in res.data){                
                this.setState({
                    pedidos: [...this.state.pedidos, res.data[key]]
                });
                console.log(res.data[key].produtos);
            }
            console.log(this.state.pedidos);           
        });      
    }

    finalizaEntrega = event => {
        this.setState({idPedido: event.target.value});
        console.log(this.state.idPedido);
       
        if(this.state.idPedido === ""){
            return;
        }
        const idPedido = this.state.idPedido

        console.log(idPedido);
        api.put(`pedido/${idPedido}`, {
            status: 0
        })
        .then(res => {
            this.shoot('Pedido finalizado e entregue!');
            this.props.history.push('/PerfilPadaria');
        })
        .catch(error => {
            this.shoot('Ah não, ocorreu algum erro. Tente novamente');
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
    
                                    <h3>Logado como: {this.state.nomePadaria}</h3>
                                    <p></p>
                                        <h4>Pedidos:</h4>

                                        <div name="localPedidos">


                                            {this.state.pedidos.map(pedidos => 
                                                <div>
                                                    <Produtos pedidos={pedidos.produtos}></Produtos>
                                                    <p>Status: {pedidos.status === 0 ? "Finalizado" : "Em aberto" }</p>
                                                    <button style={pedidos.status === 0 ? {display:`none`} : {display:`inline`}} name="finalizar" value={pedidos._id} onClick={this.finalizaEntrega}>Entregue!</button>
                                                </div>
                                            )}
                                        </div>
    
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

