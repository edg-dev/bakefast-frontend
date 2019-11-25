import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import api from '../../config/api';
import PadariaGaleria from '../../components/materialComponents/padariaGaleria';

import '../../App.css';

export default class Pedidos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            padarias : []
        }
    }

    componentDidMount(){
        api.get('padaria')
        .then(res => {
            this.setState({padarias: res.data});
        })
        .catch(error => {
            console.log(error.response);
        });
    }
    
    verGaleria = event => {
        event.preventDefault();
        this.props.history.push('/VisualizarGaleria');
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <h3>Galeria de Imagens</h3>
                                <PadariaGaleria padarias={this.state.padarias}></PadariaGaleria>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}