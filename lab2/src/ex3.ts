function myMin(x: number, y: number): number  {
    let res: number = x;

    if (y < x)
        res = y;

    return res;
}

console.log("Quem é menor: 3 ou 6? %d", myMin(3, 6));
console.log("Quem é menor: 10 ou 15? %d", myMin(15, 10));
console.log("Quem é menor: 8 ou 8? %d", myMin(8, 8));
