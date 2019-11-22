import React, { Component } from 'react';

import { Button } from "react-bootstrap";

export default class ButtonDanger extends Component {
    render() {
        return <Button variant="danger">{this.props.button}</Button>
    }
}
