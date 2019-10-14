import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Nav, Navbar} from "react-bootstrap";

import '../../App.css';
function Footer() {
    return (
    <footer>
        <Navbar bg="warning" variant="dark">
            <Nav className="mr-auto">
            <Nav.Link><Link to="/Login/"><Button variant="success">Login </Button></Link></Nav.Link>
            <Nav.Link><Link to="/IntroducaoPadaria/"><Button variant="danger">IntroducaoPadaria </Button></Link></Nav.Link>
            <Nav.Link><Link to="/CadastroPadaria/"><Button variant="danger">CadastroPadaria </Button></Link></Nav.Link>
            <Nav.Link><Link to="/PerfilPadaria/"><Button variant="danger">PerfilPadaria </Button></Link></Nav.Link>
            <Nav.Link><Link to="/CadastroCardapio/"><Button variant="danger">CadastroCardapio </Button></Link></Nav.Link>
            <Nav.Link><Link to="/CadastroProdutos/"><Button variant="danger">CadastroProdutos </Button></Link></Nav.Link>
            <Nav.Link><Link to="/Notificacoes/"><Button variant="danger">Notificacoes </Button></Link></Nav.Link>
            <Nav.Link><Link to="/Notificar/"><Button variant="danger">Notificar </Button></Link></Nav.Link>
            <Nav.Link><Link to="/RealizarPedido/"><Button variant="danger">RealizarPedido </Button></Link></Nav.Link>
            </Nav>
        </Navbar>
    </footer>
              );
            }
export default Footer;