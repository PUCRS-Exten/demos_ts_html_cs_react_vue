import React, { useState } from "react";
import './App.css';

interface Target {
  name: string;
  value: string;
}

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event: Target) => {
    const name = event.name;
    const value = event.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    alert(inputs);
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

export default function MyApp() {
  return (
    <>
      <h1>Hooks</h1>
      <MyForm />
    </>
  );
}
