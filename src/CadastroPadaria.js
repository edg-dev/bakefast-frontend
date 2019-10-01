import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function CadastroPadaria() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div>
                        <h2>Cadastre sua Padaria aqui!</h2>
                    </div>

                    <form>

                        <div>
                            <label>
                                Nome:
                                <input type="text" name="name" placeholder="Nome" />
                            </label>
                        </div>

                        <div>
                            <label>
                                Telefone:
                            <input type="number" name="telefone" placeholder="Telefone" />
                            </label>
                        </div>

                        <div>
                            <label>
                                Rua:
                            <input type="text" name="rua" placeholder="Rua" />

                            </label>
                        </div>

                        <div>
                            <label>
                                N*
                            <input type="number" name="numero" placeholder="Número" />
                            </label>
                        </div>

                        <div>
                            <label>
                                Complemento
                            <input type="text" name="complemento" placeholder="Complemento" />
                            </label>
                        </div>

                        <div>
                            <label>
                                Bairro
                            <input type="text" name="bairro" placeholder="Bairro" />
                            </label>
                        </div>

                        <div>
                            <input type="submit" value="Cadastrar" />
                        </div>

                    </form>
                </div>
            </header>
        </div>
    );
}

export default CadastroPadaria;


