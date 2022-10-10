function getMax(arr: number[]) : number {
    let max:number = -Infinity;

    for(let i of arr )
        if (i > max)
            max = i;
            
    return max;
}

let tstArr: number[] = [1024, 1, 12, 1234, 6 , 7, 8002, 34, 100];

console.log("Array: ", tstArr);
console.log("Maior elemento -> %d", getMax(tstArr));
