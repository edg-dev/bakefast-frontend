import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Nav, Navbar} from "react-bootstrap";

import '../../App.css';
function Header() {
    return (
    <header>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><Link to="/"><Button variant="primary"> Home </Button></Link> </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link to="/cliente/"><Button variant="primary"> SejaBemVindoCliente </Button></Link></Nav.Link>
                <Nav.Link><Link to="/padaria/"><Button variant="primary"> IntrocucaoPadaria </Button></Link></Nav.Link>
                <Nav.Link><Link to="/ModoDeUsar/"><Button variant="primary">ModoDeUsar </Button></Link></Nav.Link>
                <Nav.Link><Link to="/Pedidos/"><Button variant="primary">Pedidos </Button></Link></Nav.Link>
                <Nav.Link><Link to="/PerfilCliente/"><Button variant="primary">PerfilCliente </Button></Link></Nav.Link>
                <Nav.Link><Link to="/InformacoesEstatisticas/"><Button variant="primary">InformacoesEstatisticas </Button></Link></Nav.Link>
                <Nav.Link><Link to="/VizualizarPadaria/"><Button variant="primary">VizualizarPadaria </Button></Link></Nav.Link>       
            </Nav>
        </Navbar>
    </header>
            );
}
        
export default Header;