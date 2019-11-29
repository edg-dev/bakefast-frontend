import React from 'react';

import { messaging } from '../../init-fcm';
import { Container, Row, Col } from 'react-bootstrap';

import axios from 'axios';

import App from '../../App';
import api from '../../config/api';
import PedidosCliente from '../../components/materialComponents/pedidosCliente';

import '../../App.css';

import NoPedidos from '../../images/no-pedidos.jpg';

export default class PerfilCliente extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            nome: localStorage.getItem('@bakefast/username'),
            res: this.props.dados,
            pedidos: [],
            token: '',
            mostraNoPedidos: 'none'
        }
    }   

    componentDidUpdate(){
        App();
    }

    async componentDidMount(){

        if(!window.location.hash) { window.location = window.location + '#loaded'; window.location.reload(); }

        //Validação das notificações
        messaging.requestPermission()
        .then(async function() {
                const token = await messaging.getToken();               
                console.log(token);

                axios.post(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/all`, null, {
                    headers: {
                        "Authorization": "key=AAAAPxpI230:APA91bEgNkyS4ES0V-gEFf-_xMb4cqNMCJVtPufACihrjWM8rK4wT408q0mSOjzKf0vLCbLE4t-BlGgbRtASw7KSanUi3zQrOXZw9YPLXZxcQ3BQrPRyyItKzHOyxSRVqNwc4BdzhMhi"
                    }
                })
                .then(res => {
                    console.log('Sucesso', res);
                })
                .catch(err => {
                    console.log('Erro', err);
                    if(err === 'Error: "Network Error"'){
                        console.log('Network Error');
                    }
                })

        })
        .catch(err =>  {
          console.log("Não foi possível obter token.", err);
        });  

        navigator.serviceWorker.addEventListener("message", (message) => console.log(message));


        //Carregamento de pedidos recentes do cliente
        let idCliente = localStorage.getItem('@bakefast/idCliente');
        api.get(`pedido?idCliente=${idCliente}&limit=5&sort=-status`)
        .then(res => {
            console.log(res.data);

            for(var key in res.data){
                this.setState({
                    pedidos: [...this.state.pedidos, res.data[key]]
                });
            }
            console.log(this.state.pedidos);
            if(this.state.pedidos.length === 0){
                this.setState({mostraNoPedidos: 'inline'})
            }
        })
        .catch(error => {
            console.log(error);
            if(error === 'Error: "Network Error"'){
                console.log('Caiu a net');
            }
            // if(error.response.status === 404){
            //     this.erro404();
            // }
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
                                <h3>Olá {this.state.nome}</h3>
                                <br></br>

                                <h4>Pedidos Recentes:</h4>

                                <div style={{display: this.state.mostraNoPedidos}}>
                                    <img src={NoPedidos} alt="noPedidos" style={{width: '80%'}}></img> 
                                    <p>Parece que não há pedidos ainda :( </p>
                                </div>
                                
                                {/* {this.state.pedidos.length === 0 ? 
                                <div>
                                    <img src={NoPedidos} alt="noPedidos" style={{width: '80%'}}></img> 
                                    <p>Parece que não há pedidos ainda :( </p>
                                </div>
                                    
                                    : <div></div> 
                                }*/}
                                {this.state.pedidos.map(pedidos =>
                                
                                   <PedidosCliente pedidos={pedidos.produtos} status={pedidos.status}></PedidosCliente>
                                )}
                                                           
                                <br/>

                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </header>
            </div>
        )
    }
}

