import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./styles.css";

// JSX

function sum(a, b) {
  return a + b;
}

function convertToThousand(weigth, price) {
  return weigth / (1000 * price);
}

function primeiroJSX() {
  return (
    <div>
      Marcus Rodrigues - Introdução ao ReactJS
      <p>soma : {sum(1, 2)}</p>
      <h2 className="teste">Teste de estilização CSS</h2>{" "}
    </div>
  );
}

// Renderização

const App = () => {
  return <div className="App">{primeiroJSX()}</div>;
};

const element = "Teste de renderização";
const element2 = <h1>Segundo teste de renderização</h1>;

function App2() {
  return (
    <div>
      {element}
      {element2}
    </div>
  );
}

// Components

function multiply(a, b) {
  alert(a * b);
}

function App3() {
  // é comum ter uma aplicação chamada app e dentro dela as páginas e componentes

  return (
    <div className="App">
      Hello World!
      <p>
        <Button onClick={() => multiply(10, 20)} name="Marcus"></Button>
      </p>
    </div>
  );
}

// Lifecycle

class App4 extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            copo: 'agua'
        }
    }

    alterarCopo = () => {
        this.setState({
            copo: 'cerveja'
        })
    }

    render () { // em classes temos a função render
        const {clock, copo} = this.state
        return(
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.alterarCopo()}>{copo}</button>
            </div>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App4 />, rootElement);
