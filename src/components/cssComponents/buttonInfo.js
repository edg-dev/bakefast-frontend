import React, { Component } from 'react';
import { Button } from "react-bootstrap";

export default class ButtonInfo extends Component {
    render() {
        return <Button variant="info">{this.props.button}</Button>
    }
}