import React from 'react';
import { Link } from "react-router-dom";
import { Image, Container, Row, Col } from "react-bootstrap";

import ButtonPrimary from '../components/cssComponents/buttonPrimary';
import logo_color from "../images/logo_256x.png";

import '../App.css';

function Home() {
        return (
            <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <div><Image src={logo_color} roundedCircle thumbnail/></div>
                                <div><h1>Bem vindo ao Bake Fast</h1></div>
                                <div><h5>Escolha como deseja continuar:</h5></div>
                                <div><Link to="/cliente/"><ButtonPrimary button="Cliente"/></Link></div>  
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        );
}

export default Home;