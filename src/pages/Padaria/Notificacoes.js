import React, { Component } from 'react';
import '../../App.css';
import ButtonPrimary from '../../components/cssComponents/buttonPrimary';


function Notificacoes() {
    return (
        <div className="App">
            <header className="App-header">

                <div>
                    <h2>Notificações</h2>
                </div>

                <div>
                    <table>
                        <tr>
                            <th>Tipo</th>
                            <th>Texto</th>
                            <th>Ação</th>
                        </tr>
                        <tr>
                            <td>Bolos</td>
                            <td>"Bolos Fresquinhos ..."</td>
                            <td><a href="">Edit</a></td>
                        </tr>
                        <tr>
                            <td>Pães</td>
                            <td>"Pães acabam de sair ..."</td>
                            <td><a href="">Edit</a></td>
                        </tr>
                        <tr>
                            <td>Doces</td>
                            <td>"Bolos, tortas e etc ..."</td>
                            <td><a href="">Edit</a></td>
                        </tr>
                    </table>
                </div>

                <div>
                    <label>
                        Tipo da Notificação: 
                                <input type="text" name="notificacao" placeholder="" />
                    </label>
                </div>

                <div>
                    <label>
                        Texto da Notificação: 
                                <input type="text" name="textoNotificacao" placeholder="" />
                    </label>
                </div>


                <ButtonPrimary button="Realizar Pedido" />
            </header>
        </div>
    );
}

export default Notificacoes;
