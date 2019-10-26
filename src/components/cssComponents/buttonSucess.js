import React, { Component } from 'react';
import { Button } from "react-bootstrap";


export default class ButtonSucess extends Component {
    render() {
        return <Button variant="success">{this.props.button}</Button>
    }
}

