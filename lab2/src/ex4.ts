function myPowIter(x: number, y:number) : number {
    let res: number = 1;

    if (y == 0)
        res = 1;
    else 
        for (let i = 1; i <= y; i++)
            res *= x;

    return res;
}

function myPowRec(x: number, y:number) : number {
    if (y == 0)
        return 1;
    return x * myPowRec(x, y-1);
}


console.log("2 ** 8? %d", myPowIter(2, 8));
console.log("2 ** 8? %d", myPowRec(2, 8));

console.log("2 ** 16? %d", myPowIter(2, 16));
console.log("2 ** 16? %d", myPowRec(2, 16));

console.log("8 ** 2? %d", myPowIter(8, 2));
console.log("8 ** 2? %d", myPowRec(8, 2));

console.log("3 ** 24? %d", myPowIter(3, 24));
console.log("3 ** 24? %d", myPowRec(3, 24));

console.log("3 ** 150? %d", myPowIter(3, 150));
console.log("3 ** 150? %d", myPowRec(3, 150));
