import React, { SyntheticEvent, useState } from "react";
import axios from 'axios';
import './App.css';

// Verbos http tem atributos. Uma boa prática: criar uma interface
// Um post: tem id, title, body e userId opcional
interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

// Uma variável default para post, que vai receber o estado do post
//   pode ser populada após chamada da API
const defaultUsers: IUser =
{
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: ""
    }
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: ""
  }
};



function Titulo() {
  return (
    <h1>Consulta</h1>
  );
}

function FormEntradaPost() {
  const [user, setUser]: [IUser, (us: IUser) => void] = useState(defaultUsers);
  const [nroUser, setNroUser] = useState("");
  const [nomeUser, setNomeUser] = useState("");
  const [ruaUser, setRuaUser] = useState("");
  const [suiteUser, setSuiteUser] = useState("");
  const [cidadeUser, setCidadeUser] = useState("");
  const [msgErro, setMsgErro] = useState("");


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("===> " + event.target.value);
    switch(event.target.name) {
      case "nroUser": {
        setNroUser(event.target.value);
        break;
      }
      case "nomeUser": {
        setNomeUser(event.target.value);
        break;
      }
      case "ruaUser": {
        setRuaUser(event.target.value);
        break;
      }
      case "suiteUser": {
        setSuiteUser(event.target.value);
        break;
      }
      case "cidadeUser": {
        setCidadeUser(event.target.value);
        break;
      }
    }
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    axios.post<IUser>("https://jsonplaceholder.typicode.com/users/", {
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000,
    })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setMsgErro("");
      })
      .catch((ex) => {
        const error = ex.response.status === 404
          ? "Resource Not found"
          : "Ocorreu um erro inesperado";
        console.log("=====>" + error);
        setUser(defaultUsers);
        setMsgErro(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Número do User:
        <input
          type="text"
          name="nroUser"
          value={nroUser || ""}
          onChange={handleChange}
        />
      </label>

      <label>Nome do User:
        <input
          type="text"
          name="nomeUser"
          value={nomeUser || ""}
          onChange={handleChange}
        />
      </label>

      <label>Endereço:
        <input
          type="text"
          name="endUser"
          value={endUser || ""}
          onChange={handleChange}
        />
      </label>

      <label>{msgErro}</label>

      <input type="submit" />
    </form >
  )
}




export default function MyApp() {
  return (
    <>
      <Titulo />
      <FormEntradaPost />
    </>
  );
}
