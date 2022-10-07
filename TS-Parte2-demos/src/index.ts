let x:number = 5;
let y:number = 1.34348E12;
let z:number = NaN;
let a:number = +Infinity;

let s1:string = "string 1";
let s2:string = 'string 2';
let s3:string = `string 3 tem ${s1} e ${s2}`;
let s4:string = "string 4 tem ${s1} e ${s2}";

let r1:string = "aaaa";
let r2:string = "bbbb";
let r3:string = "bbbbbbbbbbbbbb";

function multiplicar (fator: number): (f: number) => number {
    return numero => numero * fator;
 }
 
 let dobrar = multiplicar(2);
 let triplicar = multiplicar(3);
 let quadruplicar = multiplicar(4);
 console.log(dobrar(5));
 console.log(triplicar(5));
 console.log(quadruplicar(5));

console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log("");

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s1[0]);
console.log(s1.length);
console.log("");

console.log(`${r1} e ${r2} -> ` + r1.localeCompare(r2));
console.log(`${r2} e ${r1} -> ` + r2.localeCompare(r1));
console.log(`${r1} e ${r3} -> ` + r1.localeCompare(r3));
console.log(`${r3} e ${r1} -> ` + r3.localeCompare(r1));
console.log(`${r1} e ${r1} -> ` + r1.localeCompare(r1));


