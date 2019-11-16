import React from 'react';
import '../../App.css';
import api from '../../config/api';
import { Button, Container, Row, Col, Form, Image } from 'react-bootstrap';
import { IoIosAdd } from "react-icons/io";

export default class RealizarPedido extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tempo: '',
            padarias: [],
            src: '',
            produtos: [{
                produto: '',
                quantidade: ''
            }],
            produto: '',
            quantidade: ''      
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
   
    handleChange = async event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });

        if(event.target.name === 'idPadariaSelecionada'){
            let idPadaria = this.state.idPadariaSelecionada;
            await api.post('cardapio/getCardapio', {
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

    pushProduto = event => {
        event.preventDefault();

        let elemento = {
            nome: this.state.produto,
            quantidade: this.state.quantidade
        }

        this.setState({
            produtos: [...this.state.produtos, elemento]
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        let idPadaria = this.state.idPadariaSelecionada;
        let idCliente = localStorage.getItem('@bakefast/idCliente');
        let tempo = this.state.tempo;

        if(idPadaria === undefined){
            this.shoot('Favor selecionar uma padaria');
        }

        if(tempo === undefined || tempo === '0' || tempo === ""){
            this.shoot('Favor selecionar o tempo');
        }

        var data = new Date();
        var hora = data.getHours();
        var min = data.getMinutes();
        var str_hora = hora + ':' + min;

        console.log(str_hora);

        var teste = {
            status: 1,
            tempoInicio: str_hora,
            idPadaria: idPadaria,
            idCliente: idCliente,
            tempo: tempo,
            produtos: this.state.produtos
        }

        console.log(teste);

        let produtos = this.state.produtos;

        if(produtos[0].produto === "" && produtos[0].quantidade === ""){
            produtos.shift();
        }

        console.log(produtos);

        api.post('pedido', {
            idPadaria: idPadaria,
            idCliente: idCliente,
            status: 1,
            tempoChegada: tempo,
            tempoInicio: str_hora,
            produtos: this.state.produtos
        })
        .then(res => {
            console.log(res);
            this.shoot('Pedido realizado com sucesso!');
            this.props.history.push('/PerfilCliente');
        })
        .catch(error => {
            console.log(error.response);
        });
    }

    shoot = (a) => {
        alert(a);
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>

                                <p><b>Realizar Pedido</b></p>

                                <br />

                                <p>Buscar Padaria</p>

                                <select name="idPadariaSelecionada" value={this.state.value} onChange={this.handleChange}>
                                    {this.state.padarias.map(padarias => <option  value={padarias._id}> {padarias.nome} </option>)}
                                </select>

                                <br />

                                <Image name="src" rounded src={this.state.src}></Image>

                                <br />

                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlID="formTempoChegada">
                                        <Form.Label>Tempo de Chegada: </Form.Label>
                                        <Form.Control as="select" name="tempo" value={this.state.value} onChange={this.handleChange}>
                                            <option value="0">Selecione o tempo...</option>
                                            <option value="5">5 min.</option>
                                            <option value="10">10 min.</option>
                                            <option value="15">15 min.</option>
                                            <option value="20">20 min.</option>
                                            <option value="30">30 min.</option>
                                            <option value="60">1 hora</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group>                                       
                                        <Form.Label>Produto: </Form.Label>
                                        <Form.Control name="produto" type="text"value={this.state.value} onChange={this.handleChange} ></Form.Control>                                       
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Quantidade: </Form.Label>
                                        <Form.Control name="quantidade" type="Number" value={this.state.value} onChange={this.handleChange} ></Form.Control> 
                                    </Form.Group>

                                    <Button type="submit" onClick={this.pushProduto} variant="warning"> <IoIosAdd></IoIosAdd> Adicionar produto</Button>  
                                    <br />
                                    <br />
                                    <Button type="submit" variant="success">Pedir!</Button>
                                </Form>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>             
                </header>
            </div>
        );
    }   
}
