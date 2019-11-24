import React from 'react';

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from '@material-ui/core/Button';

import '../../App.css';

function Sobre() {
    return (
        <div className="App">
            <header className="App-header">
            <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <Col md>
                                    <p>
                                        Projeto desenvolvido por alunos da Centro Universitário de Patos de Minas - Unipam
                                        EDG Dev.
                                    </p>

                                    <Link to="/">
                                        <Button style={{color: 'red'}}>
                                            Voltar
                                        </Button>
                                    </Link>
                                </Col>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
            </header>
        </div>
    );
}

export default Sobre;


