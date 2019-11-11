import React, { Component } from 'react';
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
                                <div><h2>Bem vindo ao App</h2></div>
                                <div><h5>Dê um Bake Fast na sua vida:</h5></div>
                                <div><Link to="/cliente/"><ButtonPrimary button="Vamos lá"/></Link></div>  
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        );
}

export default Home;