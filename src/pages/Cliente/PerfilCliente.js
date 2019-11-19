import React from 'react';
import axios from 'axios';

import '../../App.css';
import api from '../../config/api';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';
import Produtos from '../../components/customComponents/produtos';

import { Link } from "react-router-dom";
import { Container, Row, Col,} from 'react-bootstrap';
import { messaging } from '../../init-fcm';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

export default class PerfilCliente extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            nome: localStorage.getItem('@bakefast/username'),
            res: this.props.dados,
            pedidos: [],
            token: ''
        }
    }   

    async componentDidMount(){

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
                })

        })
        .catch(err =>  {
          console.log("Não foi possível obter token.", err);
        });  

        navigator.serviceWorker.addEventListener("message", (message) => console.log(message));


        //Carregamento de pedidos recentes do cliente
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
                                <h3>Olá {this.state.nome}</h3>
                                <br></br>
                                <p>Veja os produtos das padarias!</p>

                                    <Fab
                                    onClick={this.galeria}
                                    variant="extended"
                                    size="small"
                                    color="primary"
                                    aria-label="add"
                                    >
                                    <NavigationIcon />
                                    Visualizar 
                                    </Fab>

                                    <br/><br/>

                                <h4>Pedidos Recentes:</h4>
                                {this.state.pedidos.map(pedidos =>
                                   <Produtos pedidos={pedidos.produtos}></Produtos>
                                )}

                                <br/>
                                
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

