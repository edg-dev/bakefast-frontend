import React from 'react';
import '../../App.css';
import api from '../../config/api';
import { Container, Row, Col, Form } from "react-bootstrap";

export default class CadastroCardapio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            file: '',
            fileName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });           
    }

    singleFileChangedHandler = event => {        
        this.setState({
            file: event.target.files[0]
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const data = new FormData();
        const idPadaria = localStorage.getItem('@bakefast/idPadaria');

        if(this.state.file){
            data.append('file', this.state.file, this.state.file.name);
            api.post('upload/single', data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en; q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
            .then((response) => {
                if(200 === response.status){
                    if(response.data.error){
                        if('LIMIT_FILE_SIZE' === response.data.error.code){
                            console.log('Limite máximo excedido');
                            
                            this.shoot('Limite máximo: 2mb');
                        } else {
                            console.log(response.data);    
                        }                      
                    } else {
                        let fileName = response.data.location;

                        api.post('cardapio/', {
                            idPadaria: idPadaria,
                            imagem: fileName
                        },
                        { headers: { 'Content-type': 'application/json' }})
                        .then(res => {
                            console.log(res);
                        }) 
                        .catch(error => {
                            console.log(error.response);
                        });

                        this.shoot('Arquivo cadastrado');
                        this.props.history.push('/PerfilPadaria');
                    }
                }
            })
            .catch((error) => {
                console.log(error);               
            });
        } else {
            this.shoot('Favor selecionar um arquivo');            
        }
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
                                    <div>
                                        <h2>Coloque aqui uma imagem de seus cardápio contendo seus produtos.</h2>
                                    </div>
                                    <p>
                                        Para facilitar sua vida e a dos clientes, os produtos não necessitam ser cadastrados, evitando assim gasto de tempo desnecessário em cadastro ou alteração de produtos para
                                        que você foque em suas vendas.
                                    </p>

                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="formImagem">
                                            <Form.Label>Imagem: </Form.Label>
                                            <Form.Control type="file" name="file" onChange={this.singleFileChangedHandler}/>
                                        </Form.Group>

                                        <button type="submit">
                                            Cadastrar teste
                                        </button>

                                        
                                    </Form>
                                   
                                    {/* <div>
                                        <Image src="" />
                                    </div> */}
                                   
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                </header>
            </div>
        );
    }
}
