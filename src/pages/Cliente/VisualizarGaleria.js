import React from 'react';

import { Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';

import api from '../../config/api';

import '../../App.css';

export default class Pedidos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            imagens: [],
            style: {
                width: '20%'
            }
        }
    }

    componentDidMount(){
        let idPadaria = localStorage.getItem('@bakefast/idGaleria');
        api.get(`galeria?idPadaria=${idPadaria}`)
        .then(res => {
            this.setState({ imagens: res.data[0].imagens });
        })
        .catch(error => {
            console.log(error.response);
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