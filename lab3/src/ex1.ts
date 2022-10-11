class Circulo {
    private _x: number;
    private _y: number;
    private _raio: number;

    constructor(x: number, y: number, raio: number) {
        this._x = x;
        this._y = y;
        this._raio = raio;
    }

    public get x(){
        return this._x;
    }

    public get y(){
        return this._y;
    }

    public get raio(){
        return this._raio;
    }

    public set x(x: number){
        this._x = x;
    }

    public set y(y: number){
        this._y = y;
    }

    public set raio(r: number){
        this._raio = r;
    }

}

let meuCirculo1: Circulo = new Circulo(5, 5, 20);
let meuCirculo2: Circulo = new Circulo(1, 2, 15.34);
let meuCirculo3: Circulo = new Circulo(3, 6, 21.5);

console.log(meuCirculo1);
console.log(meuCirculo2);
console.log(meuCirculo3);

meuCirculo1.x = 100;
meuCirculo2.x = 100;
meuCirculo3.x = 100;

console.log(meuCirculo1);
console.log(meuCirculo2);
console.log(meuCirculo3);
