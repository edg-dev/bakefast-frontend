import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Nav, Navbar} from "react-bootstrap";

import '../../App.css';
function Header() {
    return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Navbar.Brand><Link to="/"><Button variant="warning"> Home </Button></Link> </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link to="/Login/"><Button variant="warning"> Login </Button></Link></Nav.Link>       
            </Nav>
        </Navbar>
    </header>
    );
}
        
export default Header;