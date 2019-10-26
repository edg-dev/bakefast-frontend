import React, { Component } from 'react';
import { Button } from "react-bootstrap";

export default class ButtonPrimary extends Component {
    render() {
        return <Button variant="primary">{this.props.button}</Button>
    }
}