import React from 'react';

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import App from '../../App';
import api from '../../config/api';
import Produtos from '../../components/customComponents/produtos';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';

import '../../App.css';

export default class PerfilPadaria extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            nomePadaria: localStorage.getItem('@bakefast/username'),
            idPedido: '',
            pedidos: []
        }
    }    
    
    componentDidUpdate(){
        new App();
    }

    async componentDidMount(){

        if(!window.location.hash) { window.location = window.location + '#loaded'; window.location.reload(); }

        let idPadaria = localStorage.getItem('@bakefast/idPadaria');

        api.get(`pedido?idPadaria=${idPadaria}`)
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

    cancelarEntrega = event => {
        this.setState({idPedido: event.target.value});
        console.log(this.state.idPedido);
       
        if(this.state.idPedido === ""){
            return;
        }
        const idPedido = this.state.idPedido

        console.log(idPedido);
        api.put(`pedido/${idPedido}`, {
            status: 2
        })
        .then(res => {
            this.shoot('Pedido cancelado!');
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
    
                                    <h3>{this.state.nomePadaria}</h3>
                                    <p></p>
                                        <h4>Pedidos:</h4>

                                        <div name="localPedidos">


                                            {this.state.pedidos.map(pedidos => 
                                                <div>
                                                    <Produtos pedidos={pedidos.produtos}></Produtos>
                                                    <p>Tempo de chegada: {pedidos.tempoChegada} min.</p>
                                                    <p>Status: {pedidos.status === 0 ? "Finalizado" : "Em aberto" }</p>
                                                    <button style={pedidos.status === 0 || pedidos.status === 2 ? {display:`none`} : {display:`inline`}} name="finalizar" value={pedidos._id} onClick={this.finalizaEntrega}>Entregue</button>
                                                    <button style={pedidos.status === 0 || pedidos.status === 2 ? {display:`none`} : {display:`inline`}} name="cancelar" value={pedidos._id} onClick={this.cancelarEntrega}>Cancelar</button>
                                                </div>
                                            )}
                                        </div>
                              
                                        <p>Acesse e dispare notificações aos seus clientes:
                                            <div><Link to="/Notificar/"><ButtonPrimary button="Notificar"/></Link></div></p>
                                        
                                        <p>Cadastre uma imagem de seu cardápio:
                                            <div><Link to="/CadastroCardapio/"><ButtonPrimary button="Cadastrar"/></Link></div></p>
                                        
                                        <p>Cadastre imagens de seus produtos
                                            <div><Link to="/CadastroProdutos/"><ButtonPrimary button="CadastrarProdutos"/></Link></div></p>
                                        
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>   
                </header>
            </div>
        );
    }
}

