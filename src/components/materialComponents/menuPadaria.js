import React from 'react';

import { Link } from "react-router-dom";
import { Button, Navbar } from 'react-bootstrap';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import '../../App.css';

const style = { color : 'black', fontSize: '30' };
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
                    <Link to="/PerfilPadaria/">
                        <Button class="btn" style={buttonStyle}> 
                            <PersonOutlineIcon color="secondary" style={style}/> 
                        </Button>
                    </Link> 
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/Notificar/">
                        <Button class="btn" style={buttonStyle}> 
                            <NotificationsActiveIcon color="secondary" style={style}/> 
                        </Button>
                    </Link> 
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/CadastroCardapio/">
                        <Button class="btn" style={buttonStyle}> 
                            <AddPhotoAlternateIcon color="secondary" style={style}/> 
                        </Button>
                    </Link> 
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/CadastroProdutos/">
                        <Button class="btn" style={buttonStyle}> 
                            <BurstModeIcon color="secondary" style={style}/> 
                        </Button>
                    </Link> 
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/">
                        <Button class="btn" style={buttonStyle} onClick={this.handleLogout}> 
                            <ExitToAppIcon color="secondary" style={style}/> 
                        </Button>
                    </Link> 
                </Navbar.Brand>
                

                
            </Navbar>
        </header>
        );
    }
}



