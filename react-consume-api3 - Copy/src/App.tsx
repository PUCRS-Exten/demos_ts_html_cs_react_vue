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
const defaultUsers: IUser[] = [];

function MyApi3() {
  const [users, setUsers]: [IUser[], (users: IUser[]) => void] = React.useState(defaultUsers);

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
    axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users/', {
      cancelToken: cancelTokenSource.token,
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000,
    })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
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
        {users.map((us) => (
          <li key={us.id}>
            <p>{us.name}</p>
            <p>{us.address.street}</p>
            <p>{us.address.suite}</p>
            <p>{us.phone}</p>
          </li>
        ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
}



export default function MyApp() {
  return (
    <>
      <h1>Hooks</h1>
      <MyApi3 />
    </>
  );
}
