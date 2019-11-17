import React from 'react';

import '../../App.css';
import api from '../../config/api';

import { Container } from 'react-bootstrap';

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
                        <h3>Galeria: {localStorage.getItem('@bakefast/nomeGaleria')}</h3>

                        {this.state.imagens.map(imagem => 
                            <img src={imagem} style={{width: '30%'}}></img>    
                        )}
                    </Container>
                </header>
            </div>
        );
    }
}