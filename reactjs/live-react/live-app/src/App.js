import React from 'react';
import Titulo from './components/Titulo';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* {Titulo('Componente filho')} */}
      {/* <Titulo>Componente filho</Titulo> */}
      <Titulo>
        Meu componente tem a cor:
      </Titulo>
    </div>
  );
}

export default App;
