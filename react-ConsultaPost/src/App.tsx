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
  const [nroUser, setNroUser] = useState("");
  const [user, setUser] : [IUser, (us : IUser) => void]= useState(defaultUsers);
  const [endUser, setEndUser] = useState("");
  const [msgErro, setMsgErro] = useState("");


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("===> " + event.target.value);
    setNroUser(event.target.value);
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${nroUser}`, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000,
    })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setEndUser(user.address.street + "\n" + user.address.suite + "\n");
        setMsgErro("");
      })
      .catch((ex) => {
        const error = ex.response.status === 404
          ? "Resource Not found"
          : "Ocorreu um erro inesperado";
          console.log("=====>" + error);
          setUser(defaultUsers);
          setEndUser("");
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
      <div>
        <input type="submit" />
      </div>
      <label>Nome do User: </label>
      <textarea id="nomeUser" name="nomeUser" value= {user.name}/>
      <br></br>
      <label>Endereço: </label>
      <textarea id="endUser" name="endUser" value= {endUser}/>
      <br></br>
      <label>{msgErro}</label>

    </form>
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
