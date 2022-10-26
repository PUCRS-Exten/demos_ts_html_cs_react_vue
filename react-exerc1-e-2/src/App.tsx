import React, { useState } from "react";
import './App.css';

function ContadorTriplo() {
  const [count, setCount] = useState(0);
  const [dobro, setDobro] = useState(0);
  const [metade, setMetade] = useState(0);

  console.log("Estoy aqui!! \n");

  return (
    <div>
      <p>
        Você clicou {count} vezes.
        O dobro de vezes: {dobro}.
        A metade de vezes: {metade}
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setDobro(count * 2)}>
        Click me
      </button>
      <button onClick={() => setMetade(count / 2)}>
        Click me
      </button>
    </div>
  );
}

function Advinha() {
  const [numero, setNumero] = useState("");
  const [vezes, setVezes] = useState(0);
  const [rotulo, setRotulo] = useState("Digite um número: ");
  const [semente, setSemente] = useState(Math.floor(Math.random() * 50));

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (vezes <= 10) {
      if (semente === parseInt(numero)) {
        setRotulo("Você acertou!");
        setSemente(-1);
        setVezes(0);
      }
      else {
        setRotulo("Você errou! Tente novamente!");
        setVezes(vezes + 1);
      }
    }
    else setRotulo("Acabou! Você perdeu!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>{rotulo}
        <input
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}


export default function MyApp() {
  return (
    <>
      <h1>Exercício 2</h1>
      {/* <ContadorTriplo /> */}
      <Advinha />
    </>
  );
}
