import React from 'react';

import '../../App.css';
import api from '../../config/api';
import Galeria from '../../components/customComponents/galeria';

import { Container, Table } from 'react-bootstrap';

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
                        <h3>Galeria de imagens</h3>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Padaria</th>
                                    <th>Galeria</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>                              
                                    {this.state.padarias.map(padaria => 
                                        <td>{padaria.nome}</td> 
                                    )}

                                    {this.state.padarias.map(padaria => 
                                        <td>
                                            <Galeria
                                                idGaleria={padaria._id} 
                                                nomeGaleria={padaria.nome}
                                                history={this.props.history}
                                                onClick={() => this.verGaleria()}>                                  
                                            </Galeria>                                          
                                        </td> 
                                    )}
                                </tr>
                            </tbody>
                        </Table>

                    </Container>
                </header>
            </div>
        );
    }
}