import React from 'react';
import {Table} from 'react-bootstrap';

function Produtos(props){
    const pedidos = props.pedidos;          

    return (
        <Table className="Table">
            <tr>
                <th>Nome</th>
                <th>Quantidade</th>
            </tr>
        
            {pedidos.map(produto => 
                <tr>
                    <td>{produto.nome}</td> 
                    <td>{produto.quantidade}</td>
                </tr>
            )}
       
        </Table>
    )
}

export default Produtos;