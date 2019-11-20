import React from 'react';

import '../../App.css';
import api from '../../config/api';
import Galeria from '../../components/customComponents/galeria';

import { Container, Table, Row, Col } from 'react-bootstrap';

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
                                {this.state.padarias.map(padaria =>
                                <Table responsive>
                                    <tr>
                                            <th>{padaria.nome}</th>
                                    </tr>

                                     <tr>                                      
                                            <td>
                                                <Galeria
                                                    idGaleria={padaria._id} 
                                                    nomeGaleria={padaria.nome}
                                                    history={this.props.history}
                                                    onClick={() => this.verGaleria()}>                                  
                                                </Galeria>                                          
                                            </td>                                 
                                     </tr>
                                </Table>
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