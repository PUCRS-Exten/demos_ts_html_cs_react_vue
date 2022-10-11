class Moeda {
    constructor(private _valor: number, private _nome: string) {
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

    public menorMoeda(): number {
        let menor:number = +Infinity;

        for(let m of this.moedas)
            if (m.valor < menor)
                menor = m.valor;

        return menor;
    }

    public menorMoedaInst(): Moeda {
        let menor:Moeda = new Moeda(+Infinity, "");

        for(let m of this.moedas)
            if (m.valor < menor.valor)
                menor = m;

        return menor;
    }

    public freq() : Map<number, number> {
        let freqMap: Map<number, number> = new Map<number, number>();
    
        for (let aux of this.moedas)
            if (freqMap.get(aux.valor) != undefined)
                freqMap.set(aux.valor, freqMap.get(aux.valor) as number + 1);
            else
                freqMap.set(aux.valor, 1);
    
        return freqMap;
    }
}

let cofre: Cofrinho = new Cofrinho();

cofre.adicionar(new Moeda(10, "Real"));
cofre.adicionar(new Moeda(15, "Real"));
cofre.adicionar(new Moeda(15, "Real"));
cofre.adicionar(new Moeda(20, "Real"));

console.log(cofre.calcularTotal());
console.log(JSON.stringify(cofre));
console.log(cofre.menorMoeda());
console.log(cofre.menorMoedaInst());

let cofre2: Cofrinho = new Cofrinho();
cofre2.adicionar(new Moeda(1, "CentReal"));
cofre2.adicionar(new Moeda(1, "CentReal"));
cofre2.adicionar(new Moeda(1, "CentReal"));
cofre2.adicionar(new Moeda(1, "CentReal"));
cofre2.adicionar(new Moeda(5, "CentReal"));
cofre2.adicionar(new Moeda(5, "CentReal"));
cofre2.adicionar(new Moeda(5, "CentReal"));
cofre2.adicionar(new Moeda(5, "CentReal"));
cofre2.adicionar(new Moeda(5, "CentReal"));
cofre2.adicionar(new Moeda(10, "CentReal"));
cofre2.adicionar(new Moeda(10, "CentReal"));
cofre2.adicionar(new Moeda(25, "CentReal"));
cofre2.adicionar(new Moeda(50, "CentReal"));
cofre2.adicionar(new Moeda(50, "CentReal"));
cofre2.adicionar(new Moeda(50, "CentReal"));
cofre2.adicionar(new Moeda(50, "CentReal"));
cofre2.adicionar(new Moeda(50, "CentReal"));
cofre2.adicionar(new Moeda(50, "CentReal"));
cofre2.adicionar(new Moeda(50, "CentReal"));
cofre2.adicionar(new Moeda(50, "CentReal"));
cofre2.adicionar(new Moeda(50, "CentReal"));
cofre2.adicionar(new Moeda(100, "CentReal"));
cofre2.adicionar(new Moeda(100, "CentReal"));
cofre2.adicionar(new Moeda(100, "CentReal"));

console.log(cofre2.freq());