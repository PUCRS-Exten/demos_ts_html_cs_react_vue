interface Predicado<T> {
    (item: T): boolean;
}

function filtrar<T> (array : T[], filtro : Predicado<T>): T[] {
    let resultado: T[] = [];
    for(let i = 0; i < array.length; i++) {
        let valor = array[i];
        if (filtro(valor)) resultado[resultado.length] = valor;
    }
    return resultado;
}

let pares = filtrar([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], i => i % 2 === 0);
let maiorQ10 = filtrar([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], i => i > 10);
console.log(pares);
console.log(maiorQ10);
