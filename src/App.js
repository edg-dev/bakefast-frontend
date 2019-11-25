import React from 'react';

import './App.css';

import Main from './components/mainComponents/Main';
import MenuPadaria from './components/materialComponents/menuPadaria'
import MenuCliente from './components/materialComponents/menuCliente'

function App() {

  const isCliente = localStorage.getItem('@bakefast/idCliente');
  const isPadaria = localStorage.getItem('@bakefast/idPadaria');

  if(!window.location.hash) { window.location = window.location + '#loaded'; window.location.reload(); }

  return (
    <div className="App" >

      <Main></Main>
      {isCliente != null ? <MenuCliente></MenuCliente> : <br/>}
      {isPadaria != null ? <MenuPadaria></MenuPadaria> : <br/>}

    </div>
  );
}

export default App;
