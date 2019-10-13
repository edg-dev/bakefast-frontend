import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Nav, Navbar} from "react-bootstrap";

import '../../App.css';
function Footer() {
    return (
    <footer>
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
            <Nav.Link><Link to="/Login/"><Button variant="primary">Login </Button></Link></Nav.Link>
            <Nav.Link><Link to="/IntroducaoPadaria/"><Button variant="primary">IntroducaoPadaria </Button></Link></Nav.Link>
            <Nav.Link><Link to="/CadastroPadaria/"><Button variant="primary">CadastroPadaria </Button></Link></Nav.Link>
            <Nav.Link><Link to="/PerfilPadaria/"><Button variant="primary">PerfilPadaria </Button></Link></Nav.Link>
            <Nav.Link><Link to="/CadastroCardapio/"><Button variant="primary">CadastroCardapio </Button></Link></Nav.Link>
            <Nav.Link><Link to="/CadastroProdutos/"><Button variant="primary">CadastroProdutos </Button></Link></Nav.Link>
            <Nav.Link><Link to="/Notificacoes/"><Button variant="primary">Notificacoes </Button></Link></Nav.Link>
            <Nav.Link><Link to="/Notificar/"><Button variant="primary">Notificar </Button></Link></Nav.Link>
            <Nav.Link><Link to="/RealizarPedido/"><Button variant="primary">RealizarPedido </Button></Link></Nav.Link>
            </Nav>
        </Navbar>
    </footer>
              );
            }
export default Footer;