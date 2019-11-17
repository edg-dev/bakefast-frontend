import React from 'react';

function Produtos(props){
    const pedidos = props.pedidos;
    const lista = pedidos.map((produto) => 
        <div>
            <p>{produto.nome}</p>
            <p>{produto.quantidade}</p> 
        </div>        
    );

    return (
    <p>{lista}</p>
    )
}

export default Produtos;