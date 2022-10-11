class Moeda {
    private _valor: number;
    private _nome: string;

    constructor(v: number, n: string) {
        this._valor = v;
        this._nome = n;
    }

    public get valor(){
        return this._valor;
    }

    public get nome(){
        return this._nome;
    }
}

class Cofrinho{
    private moedas: Moeda[] = [];

    public adicionar(m: Moeda): void {
        this.moedas[this.moedas.length] = m;
    }

    public calcularTotal(): number {
        let total:number = 0;

        for(let m of this.moedas)
            total += m.valor;

        return total;
    }
}

let cofre: Cofrinho = new Cofrinho();

cofre.adicionar(new Moeda(10, "Real"));
cofre.adicionar(new Moeda(15, "Real"));
cofre.adicionar(new Moeda(15, "Real"));
cofre.adicionar(new Moeda(20, "Real"));

console.log(cofre.calcularTotal());

console.log(JSON.stringify(cofre));