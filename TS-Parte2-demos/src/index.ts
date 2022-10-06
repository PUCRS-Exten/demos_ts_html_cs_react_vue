let varia1: number = 10;

function  funcao1(x: number): void {
    var varia2: number = 20;
    let varia3: number = 30;

    console.log("Varia1 -> " + varia1);
    console.log("Varia2 -> " + varia2);
    console.log("Varia3 -> " + varia3);
}

{
    var varia4: number = 40;
    let varia5: number = 50;
}

console.log("Varia1 -> " + varia1);
console.log("Varia2 -> " + varia2);
console.log("Varia3 -> " + varia3);
console.log("Varia4 -> " + varia4);
console.log("Varia5 -> " + varia5);
