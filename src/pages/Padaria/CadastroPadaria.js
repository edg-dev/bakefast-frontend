import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import { thisExpression } from '@babel/types';
import axios from 'axios';

class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

export default class CadastroPadaria extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            telefone: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });           
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post('http://localhost:4000/api/padaria/', 
            {            
                nome: this.state.nome,
                telefone: parseInt(this.state.telefone),
                endereco: {
                    rua: this.state.rua,
                    numero: parseInt(this.state.numero),             
                    bairro: this.state.bairro,
                    complemento: this.state.complemento,
                }
            }, 
            { headers: { 'Content-type': 'application/json' }})

        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error.response)
        });
    }

    render() {  
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <div>
                            <h2>Cadastre sua Padaria aqui!</h2>
                        </div>

                        <form onSubmit={this.handleSubmit}>

                            <div>
                                <label>
                                    Nome:
                                    <input type="text" name="nome" placeholder="Nome" value={this.state.value} onChange={this.handleChange}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Telefone:
                                <input type="number" name="telefone" placeholder="Telefone" value={this.state.value} onChange={this.handleChange}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Rua:
                                <input type="text" name="rua" placeholder="Rua" value={this.state.value} onChange={this.handleChange}/>

                                </label>
                            </div>

                            <div>
                                <label>
                                    N*
                                <input type="number" name="numero" placeholder="Número" value={this.state.value} onChange={this.handleChange}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Complemento
                                <input type="text" name="complemento" placeholder="Complemento" value={this.state.value} onChange={this.handleChange}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Bairro
                                <input type="text" name="bairro" placeholder="Bairro" value={this.state.value} onChange={this.handleChange}/>
                                </label>
                            </div>

                            <div>
                                <button type="submit">
                                    Cadastrar
                                </button>
                            </div>

                        </form>
                    </div>
                </header>
            </div>
        );
    }
}
