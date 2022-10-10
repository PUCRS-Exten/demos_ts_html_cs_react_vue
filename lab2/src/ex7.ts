function freq(arr: number[]) : Map<number, number> {
    let freqMap: Map<number, number> = new Map<number, number>();

    for (let aux of arr)
        if (freqMap.get(aux) != undefined)
            freqMap.set(aux, freqMap.get(aux) as number + 1);
        else
            freqMap.set(aux, 1);

    return freqMap;
}

let tstArr:number[] = [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];

let res: Map<number, number> = freq(tstArr);

for (let i of res.entries())
    console.log(i);