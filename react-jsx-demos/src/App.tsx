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


export default function MyApp() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <MyExp />
      <MyMultLinhas />
      <MyButton />
      <MyTop />
    </>
  );
}
