import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React! Agora alterado!
//         </a>
//       </header>
//     </div>
//   );
// }

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

// Expressões em JSX
function MyExp() {
  return (
    <h1>React is {5 + 5} times better with JSX</h1>
  );
}

// Expressões em JSX com multilinhas - parênteses
function MyMultLinhas() {
  return (
    (
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </ul>
    )
  );
}

// Expressões em JSX - devem ter um element no topo (top element) - DOM root
function MyTop() {
  return (
    <div>
      <h1>I am a Header.</h1>
      <h1>I am a Header too.</h1>
    </div>
  );
}

// Expressões em JSX - devem ter um element no topo (top element) - DOM root - pode ser um "fragment"
function MyTop2() {
  return (
    <>
      <h1>I am another Header.</h1>
      <h1>I am a Header too.</h1>
    </>
  );
}

// Expressões em JSX - Elementos devem ser fechados
function MyClosed() {
  return (
    <>
      <input type="text" />
    </>
  );
}

// Expressões em JSX - Atributo class -> className
function MyClassName() {
  return (
    <>
      <h1 className="myclass">Hello World</h1>
    </>
  );
}

// Condicionais no JSX. Devem estar fora do JSX. Alterações via variáveis, usand {  }
function MyIf1() {
  const x = 5;
  let text = "Goodbye";

  if (x < 10) {
    text = "deu Menor. Hello";
  }

  return (
    <>
      <h1>{text}</h1>
    </>
  );

}

// Condicionais no JSX. Ou se usa operadores ternários {  }
function MyIf2() {
  const x = 5;
  
  return (
    <>
      <h1>{(x) < 10 ? "Deu menor.Hello" : "Goodbye"}</h1>
    </>
  );

}

// Props. Componentes podem ser passados como parâmetros, as props (de properties)
interface Props {
  name: string;
}


function MyUseProps(pr: Props) {
  return (
    <div>
      Hello {pr.name}
    </div>
  );

}

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
	    <h1>Who lives in my Garage?</h1>
	    <Car />
    </>
  );
}

function MyLista() {
  const products = [
    { title: 'Repolho', id: 1 },
    { title: 'Alho', id: 2 },
    { title: 'Maça', id: 3 },
  ];
  
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
  
}

function Football() {
  const chute = () => {
    alert("Baita chute!");
  }

  return (
    <button onClick={chute}>Chuta aí!</button>
  );
}


export default function MyApp() {
  return (
    <>
      <h1>Welcome to my app</h1>
      {/* <MyExp />
      <MyMultLinhas />
      <MyButton />
      <MyTop />
      <MyTop2 />
      <MyClosed />
      <MyClassName />
      <MyIf1 />
      <MyIf2 />
      <MyUseProps name="Joao" />
      <Garage />
      <MyLista />
      <Football /> */}
    </>
  );
}
