import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Nav, Navbar} from "react-bootstrap";

import '../../App.css';
function Header() {
    return (
    <header>
        <Navbar bg="warning" variant="dark">
            <Navbar.Brand><Link to="/"><Button variant="success"> Home </Button></Link> </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link to="/cliente/"><Button variant="success"> SejaBemVindoCliente </Button></Link></Nav.Link>
                <Nav.Link><Link to="/padaria/"><Button variant="danger"> IntrocucaoPadaria </Button></Link></Nav.Link>
                <Nav.Link><Link to="/ModoDeUsar/"><Button variant="success">ModoDeUsar </Button></Link></Nav.Link>
                <Nav.Link><Link to="/Pedidos/"><Button variant="danger">Pedidos </Button></Link></Nav.Link>
                <Nav.Link><Link to="/PerfilCliente/"><Button variant="danger">PerfilCliente </Button></Link></Nav.Link>
                <Nav.Link><Link to="/InformacoesEstatisticas/"><Button variant="danger">InformacoesEstatisticas </Button></Link></Nav.Link>
                <Nav.Link><Link to="/VizualizarPadaria/"><Button variant="danger">VizualizarPadaria </Button></Link></Nav.Link>       
            </Nav>
        </Navbar>
    </header>
            );
}
        
export default Header;