import React from 'react';

import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Nav, Navbar} from "react-bootstrap";

import { IoIosCafe, IoIosHome, IoIosMan} from "react-icons/io";

import '../../App.css';

function Menu() {
    return (
    <header>
            {/* <Navbar bg="light" variant="light" expand="lg" >
                <Navbar.Brand><Link to="/"><Button variant="light"> <IoIosHome/></Button></Link> </Navbar.Brand>
            <Nav className="mr-center">
                    <Nav.Link><Link to="/Login/"><Button variant="light"> <IoIosMan/></Button></Link></Nav.Link>
            </Nav>
            <Nav className="mr-right">
                    <Nav.Link><Link to="/Padaria/"><Button variant="light"> <IoIosCafe/></Button></Link></Nav.Link>  
            </Nav>
            <Nav className="mr-right">
                    <Nav.Link><Link to="/Padaria/"><Button variant="light"> <IoIosCafe/></Button></Link></Nav.Link>  
            </Nav>
            <Nav className="mr-right">
                    <Nav.Link><Link to="/Padaria/"><Button variant="light"> <IoIosCafe/></Button></Link></Nav.Link>  
            </Nav>
        </Navbar> */}
    </header>
    );
}
        
export default Menu;