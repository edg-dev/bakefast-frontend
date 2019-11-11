import React from 'react';
import { Row, Form } from "react-bootstrap";

export class pedidoInput extends React.Component {
    render(){
        return ( 
            <Form.Group>
                <Form.Label>Produto: </Form.Label>
                <Form.Control type="text" ></Form.Control>

                <Form.Label>Quantidade: </Form.Label>
                <Form.Control type="number" ></Form.Control>
            </Form.Group>
         
        );
    }
} 
