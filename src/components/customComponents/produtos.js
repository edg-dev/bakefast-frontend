import React from 'react';

import {Table} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';

function Produtos(props) {
    const pedidos = props.pedidos;

    return (
        <Typography>
            {pedidos.map(produto =>
            <p>{produto.nome}, {produto.quantidade}</p>
            )}
        </Typography>
    )
}

export default Produtos;