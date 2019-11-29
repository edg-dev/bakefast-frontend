import React from 'react';

import { Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';

import api from '../../config/api';

import '../../App.css';

import noImages from '../../images/no-images.jpg';

export default class Pedidos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            imagens: [],
            style: {
                width: '20%'
            },
            mostraNoPedidos: 'none'
        }
    }

    componentDidMount(){
        let idPadaria = localStorage.getItem('@bakefast/idGaleria');
        api.get(`galeria?idPadaria=${idPadaria}`)
        .then(res => {
            this.setState({ imagens: res.data[0].imagens });
            if(this.state.imagens === 0){
                this.setState({mostraNoPedidos: 'inline'});
            }
        })
        .catch(error => {
            console.log(error);
            if(error){
                this.setState({mostraNoPedidos: 'inline'});
            }
        });
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <h3>Galeria: {localStorage.getItem('@bakefast/nomeGaleria')}</h3>

                                <div style={{display: this.state.mostraNoPedidos}}>
                                    <img src={noImages} alt="noImages" style={{width: '100%'}}></img> 
                                    <p>Nenhuma imagem foi cadastrada ainda :( </p>
                                </div>

                                {this.state.imagens.map(imagem => 
                                <div>  
                                        <br />
                                        <img alt="gallery" src={imagem} style={{ width: '100%', border: 'solid'}}></img>
                                </div>     
                                )}

                                    <Link to="/PerfilCliente/">
                                        <Button style={{color: 'red'}}>
                                            Voltar
                                        </Button>
                                    </Link>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}