import React from 'react';

import { Link } from "react-router-dom";
import { Button, Navbar } from 'react-bootstrap';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import '../../App.css';

const style = { color : 'black', fontSize: '25' };
const style2 = { color : 'red', fontSize: '25' };
const buttonStyle = { 'background-color': 'transparent', border: 'none'};

export default class MenuCliente extends React.Component {

    handleLogout = event => {
        localStorage.clear();
    }

    render () {
        return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" fixed="bottom">
                <Navbar.Brand>
                    <Link to="/PerfilCliente/">
                        <Button class="btn" style={buttonStyle}> 
                            <PersonOutlineIcon color="secondary" style={style}/> 
                        </Button>
                    </Link> 
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/Galeria/">
                        <Button class="btn" style={buttonStyle}> 
                            <PhotoLibraryIcon color="primary" style={style}/> 
                        </Button>
                    </Link> 
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/RealizarPedido/">
                        <Button class="btn" style={buttonStyle}> 
                            <AddShoppingCartIcon color="primary" style={style}/> 
                        </Button>
                    </Link> 
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/">
                        <Button class="btn" style={buttonStyle}> 
                            <ExitToAppIcon color="primary" style={style2} onClick={this.handleLogout}/> 
                        </Button>
                    </Link> 
                </Navbar.Brand>


            </Navbar>
        </header>
        );
    }
}



