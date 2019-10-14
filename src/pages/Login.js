import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Button, Image, Container, Row, Col, Form } from "react-bootstrap";
import '../App.css';
import logo_color from "../images/logo_256x.png";

class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={4}>
                                <div><Image src={logo_color} roundedCircle thumbnail/></div>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Usuário: </Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Senha: </Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Form>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        </div>
    );
}

export default Login;


