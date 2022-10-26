import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import './App.css';


function MyForm() {
  const [inputs, setInputs] = useState({
    username: "",
    age: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("change", name, value);
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    alert(inputs.username + " " + inputs.age);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

function MyFormTA() {
  const [textarea, setTextarea] = useState(
    "Este é o nosso texto inicial. Vamos alterá-lo."
  );

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

function MyFormSEL() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMyCar(event.target.value)
  }

  return (
    <>
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
      <p> O carro: {myCar} </p>
    </>
  )
}

function MyFormRAD(){
    const [selectedDrink, setSelectedDrink] = useState<String>();
  
    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedDrink(event.target.value);
    };
  
    return (
      <div className="container">
        <h3>Seleção de Bebida</h3>
        <fieldset>
          <legend>Selecione sua bebida preferida:</legend>
          <p>
            <input
              type="radio"
              name="drink"
              value="Café (do value)"
              id="cafe"
              onChange={radioHandler}
            />
            <label htmlFor="coffee">Café</label>
          </p>
  
          <p>
            <input
              type="radio"
              name="drink"
              value="Chá Verde (do value)"
              id="cha"
              onChange={radioHandler}
            />
            <label htmlFor="tea">Chá Verde</label>
          </p>
  
          <p>
            <input
              type="radio"
              name="drink"
              value="Suco de Abóbora (do value)"
              id="pumpkin"
              onChange={radioHandler}
            />
            <label htmlFor="pumpkin">Suco de Abóbora</label>
          </p>
        </fieldset>
  
        {/* Mostra a seleção */}
        <h2>{selectedDrink}</h2>
      </div>
    );
  };

export default function MyApp() {
  return (
    <>
      <h1>Hooks</h1>
      {/* <MyForm />
      <MyFormSEL /> */}
      <MyFormRAD />
    </>
  );
}
