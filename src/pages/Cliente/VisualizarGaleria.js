import React from 'react';

import '../../App.css';
import api from '../../config/api';

import { Container, Row, Col} from 'react-bootstrap';

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
                                        <img src={imagem} style={{ width: '100%', border: 'solid'}}></img>
                                </div>     
                                )}
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}