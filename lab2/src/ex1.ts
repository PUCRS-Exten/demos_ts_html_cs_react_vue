const INI: number = 0;
const FIM: number = 20;

for (let i: number = INI; i <= FIM; i++)
    if (i % 2 == 0)
        console.log("i -> %d", i);

let i: number = INI;
while (i <= FIM) {
    if (i % 2 == 0)
        console.log("i -> %d", i);

    i++;
}