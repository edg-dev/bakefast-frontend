import React, { Component } from 'react';
import { Button } from "react-bootstrap";

class ButtonWarning extends Component {
    render() {
        return <Button variant="warning">{this.props.button}</Button>
    }
}

export default ButtonWarning;