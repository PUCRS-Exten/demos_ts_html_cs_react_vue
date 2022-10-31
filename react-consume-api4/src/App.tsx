import React, { useState } from "react";
import axios, { CancelTokenSource } from 'axios';
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
const defaultUser: IUser =  {
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

function MyApi4() {
  const [user, setUser]: [IUser, (us: IUser) => void] = React.useState(defaultUser);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true); //tipo específico para a variável de estado

  const [error, setError]: [string, (error: string) => void] = React.useState('');

  // Sobre Cancel
  const cancelToken = axios.CancelToken; //create cancel token
  const [cancelTokenSource, setCancelTokenSource]: [CancelTokenSource, (cancelTokenSource: CancelTokenSource) => void] = React.useState(cancelToken.source());

  const handleCancelClick = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('User cancelled operation');
    }
  };

  console.log("Vai começar");

  React.useEffect(() => {
    axios.get<IUser>('https://jsonplaceholder.typicode.com/users/8/', {
      cancelToken: cancelTokenSource.token,
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000,
    })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        const error = ex.response.status === 404
          ? "Resource Not found"
          : "Ocorreu um erro inesperado";

        setError(error);
        setLoading(false);
      });
  }, [cancelTokenSource.token]);

  // O componente funcional:
  //    
  return (
    <div className="App">
      {loading && (<button onClick={handleCancelClick}>Cancel</button>)}
      <ul className="posts">
          <li>
            <p>{user.name}</p>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.phone}</p>
          </li>
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
}



export default function MyApp() {
  return (
    <>
      <h1>Hooks</h1>
      <MyApi4 />
    </>
  );
}
