import React, { Component } from 'react';

import { Button } from "react-bootstrap";

export default class ButtonPrimary extends Component {
    render() {
        return <Button type="submit" variant="primary">{this.props.button}</Button>
    }
}