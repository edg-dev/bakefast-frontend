import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown} from "react-bootstrap";

import '../../App.css';
function Footer() {
    return (
    <footer>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Nav className="mr-auto">
            <Nav.Link><Link to="/IntroducaoPadaria/"><Button variant="success">IntroducaoPadaria </Button></Link></Nav.Link>
            <Nav.Link><Link to="/CadastroPadaria/"><Button variant="success">CadastroPadaria </Button></Link></Nav.Link>
            <Nav.Link><Link to="/PerfilPadaria/"><Button variant="success">PerfilPadaria </Button></Link></Nav.Link>
            <Nav.Link><Link to="/CadastroCardapio/"><Button variant="success">CadastroCardapio </Button></Link></Nav.Link>
            <Nav.Link><Link to="/CadastroProdutos/"><Button variant="success">CadastroProdutos </Button></Link></Nav.Link>
            <Nav.Link><Link to="/Notificacoes/"><Button variant="success">Notificacoes </Button></Link></Nav.Link>
            <Nav.Link><Link to="/Notificar/"><Button variant="success">Notificar </Button></Link></Nav.Link>
    <NavDropdown id="basic-nav-dropdown">
        <NavDropdown.Item> <Link to="/RealizarPedido/"><Button variant="success">RealizarPedido </Button></Link> </NavDropdown.Item>
        <NavDropdown.Item> <Link to="/ModoDeUsar/"><Button variant="success">ModoDeUsar </Button></Link> </NavDropdown.Item>
        <NavDropdown.Item> <Link to="/Pedidos/"><Button variant="success">Pedidos </Button></Link> </NavDropdown.Item>
        <NavDropdown.Item> <Link to="/PerfilCliente/"><Button variant="success">PerfilCliente </Button></Link> </NavDropdown.Item>
        <NavDropdown.Item> <Link to="/VizualizarPadaria/"><Button variant="success">VizualizarPadaria </Button></Link> </NavDropdown.Item>
      </NavDropdown>

            </Nav>
        </Navbar>
    </footer>
              );
            }
export default Footer;