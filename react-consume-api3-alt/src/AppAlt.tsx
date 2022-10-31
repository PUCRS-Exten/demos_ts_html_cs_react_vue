import React, { useState } from "react";
import axios, { AxiosResponse, CancelTokenSource } from 'axios';
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

interface IEstado {
  users: IUser[], 
  loading: boolean,
  error: string
}

// Uma variável default para post, que vai receber o estado do post
//   pode ser populada após chamada da API
const defaultUsers: IUser[] = [];
// {
//   id: 0,
//   name: "",
//   username: "",
//   email: "",
//   address: {
//     street: "",
//     suite: "",
//     city: "",
//     zipcode: "",
//     geo: {
//       lat: "",
//       lng: ""
//     }
//   },
//   phone: "",
//   website: "",
//   company: {
//     name: "",
//     catchPhrase: "",
//     bs: ""
//   }
// };




function MyApi3() {
      const [userState, setUserState] : [IEstado ,(estado:IEstado) => void] = React.useState<IEstado>({
                                                                                              users: defaultUsers,
                                                                                              loading: true,
                                                                                              error: ''
                                                                                            }); 
                                         
     
      const cancelToken = axios.CancelToken; //create cancel token
      const [cancelTokenSource, setCancelTokenSource]: [CancelTokenSource, (cancelTokenSource: CancelTokenSource) => void] = React.useState(cancelToken.source());

      const handleCancelClick = () => {
        if (cancelTokenSource) {
          cancelTokenSource.cancel('User cancelled operation');
        }
      };

      React.useEffect(() => {
        axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users/', {
          cancelToken: cancelTokenSource.token,
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000,
        })
          .then((response) => {
            console.log(response.data);
            setUserState({users: response.data, loading: false, error: ''});
          })
          .catch((ex) => {
            const error = ex.response.status === 404
              ? "Resource Not found"
              : "Ocorreu um erro inesperado";

            setUserState({users: [], loading: false, error: error});
            });
      }, [cancelTokenSource.token]);

      // O componente funcional:
      //    
      return (
        <div className="App">
          {userState.loading && (<button onClick={handleCancelClick}>Cancel</button>)}
          <ul className="posts">
            {userState.users.map((us) => (
              <li key={us.id}>
                <h3>{us.name}</h3>
                <p>{us.address.street}</p>
                <p>{us.address.suite}</p>
                <p>{us.phone}</p>
              </li>
            ))}
          </ul>
          {userState.error && <p className="error">{userState.error}</p>}
        </div>
      );
    }



export default function MyAppAlt() {
    return (
      <>
        <h1>Hooks</h1>
        <MyApi3 />
      </>
    );
  }
