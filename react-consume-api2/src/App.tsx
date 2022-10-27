import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import axios, { CancelTokenSource } from 'axios';
import './App.css';

// Verbos http tem atributos. Uma boa prática: criar uma interface
// Um post: tem id, title, body e userId opcional
interface IPost {
  id: number;
  userId?: number;
  title: string;
  body: string;
}

// Uma variável default para post, que vai receber o estado do post
//   pode ser populada após chamada da API
const defaultPosts: IPost = {id: 0,  title:"", body:""};


// Um componente funcional React, que vai consumir a API
function MyApi1() {
  //A noção de estado: 
  //    estado do loading
  //    estado do post
  //    estado do erro (se for o caso)
  // Repare na declaração dos tipos
  const [posts, setPosts]: [IPost, (posts: IPost) => void] = React.useState(defaultPosts);

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

  //Chamada de uma Rest API: usa-se a função useEffect do React
  //    useEffect() - executada após a rederização do componente, para permitir "efeito colaterais" (alterar partes mutáveis da página, como título,
  //                      funções de callback, ...)
  //    chamada da função/método que executa a chamada da api. Param 1: uma função, Param2: array vazio
  //    A chamada da API:
  //            axios.get<variavel-post>(URL)
  //
  //       Algumas APIs exigem o header do request. Um segundo parâmetro da chamada.
  //            {headers: { ...}}
  //       
  //       Terceiro parâmetro: timeout
  //
  //    A chamada é assíncrona (uma Promisse). É presico configurar o que acontecerá quando a resposta chegar.
  //       - response - os dados de retorno
  //          - response.data - os dados de retorno, já com o JSon processado
  //       - o corpo da função: atualizad os estados do componente (posts e loading)
  //
  //    É necessário tratar erros da chamada, caso ocorram. Método catch
  //        parâmetro ex - objeto que representa o erro

  console.log("Vai começar");

  React.useEffect(() => {
    axios.get<IPost>('https://jsonplaceholder.typicode.com/posts/1', {cancelToken: cancelTokenSource.token,
                                                                      headers: {'Content-Type': 'application/json'},
                                                                      timeout: 10000,
                                                                     })
                          .then((response) => {
                            console.log(response.data);
                            setPosts(response.data);
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
        
            <h3>{posts.title}</h3>
            <p>{posts.body}</p>
        
      {error && <p className="error">{error}</p>}
    </div>
  );
}



export default function MyApp() {
  return (
    <>
      <h1>Hooks</h1>
      <MyApi1 />
    </>
  );
}
