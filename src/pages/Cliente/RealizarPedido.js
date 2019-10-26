import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';


class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}




function RealizarPedido() {

    // state = {

    // }

    // handleChange = event => {
    //     this.setState({name: event.target.value});
    // }

    // handleSubmit = event => {
    //     event.preventDefault();
    // }

    // const pedido = {
    //     //objeto pedido
    //     name: this.state.name
    // };

    // axios.post('url/da/api', {pedido})
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
//Informações importantes
//<form onSubmit={this.handleSubmit}> => como o form vai dar o submit
//<input type="text" name="name" onChange={this.handleChange}/> => atualiza o estado toda vez que for alterado
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h3>Seu Pedido foi:</h3>
                </div>

                <div>
                    <ul>
                        <li>3 pães de dal</li>
                        <li>2 pães de queijo</li>
                        <li>1 bolo</li>
                    </ul>
                </div>

                <div>
                    <h4>Deseja realizar o pedido?</h4>
                    <MyButton button="Confirmar" />
                    <MyButton button="Voltar" />
                </div>
            </header>
        </div>
    );
}

export default RealizarPedido;