import React from 'react';

import { Button, Container, Row, Col, Form, Image } from 'react-bootstrap';

import api from '../../config/api';

import '../../App.css';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';

export default class RealizarPedido extends React.Component{
    constructor(props){
        super(props);

        this.state = {          
            padarias: [],
            src: '',
            produtos: [{
                produto: '',
                quantidade: ''
            }],
            produto: '',
            quantidade: ''      
        }

        this.state.produtos.map(produto => {
            if(produto.nome === undefined){
                this.state.produtos.splice(0,1);
            }
            return null;
        });
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.pushProduto = this.pushProduto.bind(this);
    }

    componentDidMount(){
        console.log(this.state);
        api.get('/padaria')
        .then(res => {
            const padarias = res.data;
            this.setState({padarias});
        });
    }
   
    handleDelete = (produto) => {
        var index = this.state.produtos.indexOf(produto);
        this.state.produtos.splice(index, 1);
        this.setState({ghostState: ''});
    }
   
    handleChange = event => {
       
        let name = event.target.name;
        let value = event.target.value;
        this.setState((state) => ({ [name]: value }));
        console.log(this.state);
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

    pushProduto = event => {
        event.preventDefault();

        let elemento = {
            nome: this.state.produto,
            quantidade: this.state.quantidade
        }

        this.setState({
            produtos: [...this.state.produtos, elemento]
        });
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

                                <div>          
                                    <FormControl style={{width: '200px'}}>
                                        <InputLabel>Selecione a padaria</InputLabel>
                                        <Select onChange={this.handleChange} name="idPadariaSelecionada" value={this.state.value}>
                                            {this.state.padarias.map(padaria => 
                                                <MenuItem value={padaria._id}> {padaria.nome} </MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>

                                <br />

                                <Image style={{width: '50%'}} name="src" rounded src={this.state.src}></Image>

                                <br />

                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlID="formTempoChegada">
                                        <Form.Label>Tempo de Chegada: </Form.Label>

                                        <div>          
                                            <FormControl name="tempo" style={{width: '200px'}}>
                                                <InputLabel>Selecione o tempo...</InputLabel>
                                                <Select name="tempo" onChange={this.handleChange} value={this.state.value}>
                                                    <MenuItem value={5}>5 min.</MenuItem>
                                                    <MenuItem value={10}>10 min.</MenuItem>
                                                    <MenuItem value={15}>15 min.</MenuItem>
                                                    <MenuItem value={20}>20 min.</MenuItem>
                                                    <MenuItem value={30}>30 min.</MenuItem>
                                                    <MenuItem value={60}>1 hora</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>

                                        {/* <Form.Control as="select" name="tempo" value={this.state.value} onChange={this.handleChange}>
                                            <option value="0">Selecione o tempo...</option>
                                            <option value="5">5 min.</option>
                                            <option value="10">10 min.</option>
                                            <option value="15">15 min.</option>
                                            <option value="20">20 min.</option>
                                            <option value="30">30 min.</option>
                                            <option value="60">1 hora</option>
                                        </Form.Control> */}
                                    </Form.Group>

                                    <Form.Group> 
                                        <TextField name="produto" type="text" value={this.state.value} onChange={this.handleChange} id="standard-basic" label="Produto:" />                           
                                    </Form.Group>

                                    <Form.Group>
                                        <TextField name="quantidade" type="Number" value={this.state.value} onChange={this.handleChange} id="standard-basic" label="Quantidade:" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Col md="auto">
                                            <Button type="submit" onClick={this.pushProduto} style={{marginRight: '10px'}}> <AddIcon /> </Button>  
                                            
                                            <Button type="submit" variant="success" style={{marginLeft: '10px'}}> <CheckIcon /></Button>
                                        </Col>                                      
                                    </Form.Group>

                                </Form>
                            </Col>
                            <Col></Col>
                        </Row>
                        <p>Produtos adicionados</p>

                        {this.state.produtos.map(produto =>
                            <Chip
                                icon={<FreeBreakfastIcon />}
                                label={'Produto: ' + produto.nome + ', Quantidade: ' + produto.quantidade}
                                onDelete={() => this.handleDelete(produto)}
                                variant="outlined"
                            /> 
                        )}
                    </Container>             
                </header>
            </div>
        );
    }   
}
