import React from 'react';
import '../../App.css';
import api from '../../config/api';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Table, Form, Image } from 'react-bootstrap';
import ButtonWarning from '../../components/cssComponents/buttonPrimary';
import pedidoInput from '../../components/customComponents/pedidoInput';

export default class RealizarPedido extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tempo: '',
            padarias: [],
            idPadariaSelecionada: '',
            src: '',
            produtos: [{
                produto: '',
                quantidade: ''
            }]      
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount(){
        api.get('/padaria')
        .then(res => {
            const padarias = res.data;
            this.setState({padarias});
        });
    }
   
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });

        if(event.target.name === 'produto' || event.target.name === 'quantidade'){
            this.setState({
                produto: this.state.produto, 
                quantidade: this.state.quantidade
            });
        }
        
        if(event.target.name === 'idPadariaSelecionada'){
            let idPadaria = this.state.idPadariaSelecionada;
            api.post('cardapio/getCardapio', {
                idPadaria: idPadaria
            })
            .then(res => {
                console.log(res);
                this.setState({src: res.data.imagem});
            })
            .catch(error => {
                console.log(error.response);
            });
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        let idPadaria = this.state.idPadariaSelecionada;
        let idCliente = localStorage.getItem('@bakefast/idCliente');

        var data = new Date();
        var hora = data.getHours();
        var min = data.getMinutes();
        var str_hora = hora + ':' + min;

        console.log(str_hora);

        var teste = {
            status: 1,
            tempoInicio: str_hora,
            idPadaria: idPadaria,
            idCliente: idCliente
        }

        console.log(teste);

        // api.post('pedido', {
        //     status: 1,
            
        //     tempoInicio: str_hora,
        //     produtos: [{
        //         nome: '',
        //         quantidade: ''
        //     }]
        // })
        // .then(res => {
        //     console.log(res);
        //     this.setState({src: res.data.imagem});
        // })
        // .catch(error => {
        //     console.log(error.response);
        // });
    }

    render(){
        console.log(this.state);
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <select name="idPadariaSelecionada" value={this.state.value} onChange={this.handleChange}>
                            {this.state.padarias.map(padarias => <option  value={padarias._id}> {padarias.nome} </option>)}
                        </select>

                        <img name="src" src={this.state.src}>

                        </img>

                        <br />

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlID="formTempoChegada">
                                <Form.Label>Tempo de Chegada: </Form.Label>
                                <select name="tempo" value={this.state.value} onChange={this.handleChange}>
                                    <option value="5">5 min.</option>
                                    <option value="10">10 min.</option>
                                    <option value="15">15 min.</option>
                                    <option value="20">20 min.</option>
                                    <option value="30">30 min.</option>
                                    <option value="60">1 hora</option>
                                </select>
                            </Form.Group>


                            <Row>
                                <Col sm={8}>
                                    <Form.Group>                                       
                                            <Form.Label>Produto: </Form.Label>
                                            <Form.Control name="produto" type="text"value={this.state.value} onChange={this.handleChange} ></Form.Control>                                       
                                    </Form.Group>

                                </Col>

                                <Col sm={4}>
                                    <Form.Group>
                                        <Form.Label>Quantidade: </Form.Label>
                                        <Form.Control name="quantidade" type="Number" value={this.state.value} onChange={this.handleChange} ></Form.Control> 
                                    </Form.Group>
                                </Col>
 
                            </Row>
                   
                            <button type="submit"> Pedir! </button>
                        </Form>
                    </Container>
                  
                </header>
            </div>
        );
    }   
}
