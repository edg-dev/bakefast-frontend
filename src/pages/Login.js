import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class MyButton extends Component {
    render() {
        return <button variant="primary">{this.props.button}</button>
    }
}

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div>
                        <img src="" />
                    </div>

                    <form>

                        <div>
                            <label>
                                Nome:
                                <input type="text" name="name" placeholder="Login" />
                            </label>
                        </div>

                        <div>
                        <label>
                        Senha:
                            <input type="password" name="senha" placeholder="Password"/>
                        </label>
                        </div>

                        <div>
                        <input type="submit" value="Logar" />
                        </div>

                    </form>
                </div>
            </header>
        </div>
    );
}

export default Login;


