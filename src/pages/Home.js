import React from 'react';

import { Link } from "react-router-dom";
import { Image, Container, Row, Col } from "react-bootstrap";

import App from '../App';
import logo_color from "../images/logo_256x.png";
import Button from '@material-ui/core/Button';

import '../App.css';

export default class Home extends React.Component {
    componentDidUpdate(){
        App();
    }

    async componentDidMount(){
        if(!window.location.hash) { window.location = window.location + '#loaded'; window.location.reload(); }  
    }

    render() {
        return (
            <header className="App-header">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <div><Image alt="logo" src={logo_color} roundedCircle thumbnail/></div>
                                <br />
                                <div><h2>Bem vindo ao App</h2></div>
                                <div><h5>Dê um Bake Fast na sua vida</h5></div>
                                <br />
                                <div>
                                    <Link to="/cliente/">
                                        <Button style={{color: '#ffbf00'}}> Vamos lá!</Button>
                                    </Link>
                                </div>

                                <div>
                                    <Link to="/sobre/">
                                        <Button style={{color: 'blue'}}> Sobre o aplicativo</Button>
                                    </Link>
                                </div>  
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        );
    }
}



