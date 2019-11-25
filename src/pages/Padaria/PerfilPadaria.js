import React from 'react';

import { Container, Row, Col, Button } from "react-bootstrap";

import App from '../../App';
import api from '../../config/api';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

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

        api.get(`pedido?idPadaria=${idPadaria}&sort=-status`)
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
        console.log(this.state.pedidos);
    }

    finalizaEntrega = (idPedido) => {
        console.log(idPedido);
       
        if(idPedido === ""){
            return;
        }

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

    cancelarEntrega = (idPedido) => {
        console.log(idPedido);
       
        if(idPedido === ""){
            return;
        }

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
    
                                    <h3>Logado como: {this.state.nomePadaria}</h3>
                                    <p></p>
                                        <h4>Pedidos:</h4>

                                        <div name="localPedidos"> 
                                            {this.state.pedidos.map(pedido => 
                                                <Box style={{ paddingBottom: '20px' }}>
                                                    <Box border={5} style={pedido.status === 1 ? { borderColor: '#00b4ffcf', borderRadius: 20} : { borderColor: 'green', borderRadius: 20}}>
                                                    {/* {() => this.renderSwitch(pedido.status)} */}
                                                    {/* <Box border={5}style={this.state.borderStyle}> */}
                                                        <Paper>           
                                                            <Typography>
                                                                Cliente: {pedido.nomeCliente} {pedido.telefoneCliente}
                                                            </Typography>                                    
                                                            {pedido.produtos.map(produto =>
                                                                <Typography>
                                                                    Produto: {produto.nome}, Quantidade: {produto.quantidade}
                                                                </Typography>
                                                            )}

                                                            <Typography component="p">
                                                                Tempo de Chegada: {pedido.tempoChegada} min.
                                                            </Typography>

                                                            <Typography component="p">
                                                                Status: {pedido.status === 0 ? "Entregue/Cancelado" : "Em aberto" }
                                                            </Typography>

                                                            <Button 
                                                                style={pedido.status === 0 || pedido.status === 2 ? {display:`none`, backgroundColor: 'transparent', border: 'none'} : {display:`inline`, backgroundColor: 'transparent', border: 'none'}} 
                                                                name="cancelar" value={pedido._id} 
                                                                onClick={() => this.cancelarEntrega(pedido._id)}
                                                            > <CloseIcon style={{ color : 'red', fontSize: '30' }}/> 
                                                            </Button>

                                                            <Button 
                                                                style={pedido.status === 0 || pedido.status === 2 ? {display:`none`, backgroundColor: 'transparent', border: 'none'} : {display:`inline`, backgroundColor: 'transparent', border: 'none'}} 
                                                                name="finalizar" value={pedido._id} 
                                                                onClick={() => this.finalizaEntrega(pedido._id)}                                                              
                                                            > <CheckIcon style={{ color : 'green', fontSize: '30' }}/>
                                                            </Button>

                                                        </Paper>
                                                    </Box>
                                                </Box>
                                            )}
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

