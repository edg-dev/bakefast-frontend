import React from 'react';

import './App.css';

import Menu from './components/mainComponents/Menu';
import Main from './components/mainComponents/Main';
import MenuPadaria from './components/mainComponents/MenuPadaria'

function App() {

  const isCliente = localStorage.getItem('@bakefast/idCliente');
  const isPadaria = localStorage.getItem('@bakefast/idPadaria');
  
  if(!window.location.hash) { window.location = window.location + '#loaded'; window.location.reload(); }

  return (
    <div className="App" >

      <Main></Main>
      {isCliente != null ? <Menu></Menu> : <div></div>}
      {isPadaria != null ? <MenuPadaria></MenuPadaria> : <div></div>}

    </div>
  );
}

export default App;
