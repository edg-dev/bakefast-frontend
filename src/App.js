import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Se você está lendo essa mensagem, conseguiu startar a aplicação com sucesso.</p>
        <p>
          Editar o arquivo <code>src/App.js</code> adicionando o nome e commitar no projeto.
        </p>
	      <p>
          Hello Warudo!
          Hello Yasuo!
        </p>
        <ul>
          <li>Wender Lucas Souza</li>
	        <li>Gustavo Henrique Dias Silva</li>
          <li>Leonardo Lourenço Braga</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
