abstract class Cliente {
    constructor(private _nome: string) {
    }

    public get nome(){
        return this._nome;
    }

    public abstract getMensalidade(): number;
}

class ClienteFisico extends Cliente{
    constructor(nome: string, private _idade: number, private _salario:number){
        super(nome);
    }

    public get idade() {
        return this._idade;
    }

    public set idade(i: number){
        this._idade = i;
    }

    public get salario() {
        return this._salario;
    }

    public set salario(s: number){
        this._salario = s;
    }

    public getMensalidade(): number {
        let res: number = 0;

        if (this.idade < 60)
            res = this.salario * 0.1;
        else
            res = this.salario * 0.15;         
        
        return res;
    }
}

class ClienteJuridico extends Cliente{
    constructor(nome: string, private _mensalidade: number){
        super(nome);
    }

    public set mensalidade(m: number){
        this._mensalidade = m;
    }

    public getMensalidade(): number{
        return this._mensalidade;
    }
}

let cliPessoa1: ClienteFisico = new ClienteFisico("Pedro", 20, 1000.00);
let cliPessoa2: ClienteFisico = new ClienteFisico("Maria", 65, 1000.00);
let cliJurid: ClienteJuridico = new ClienteJuridico("Empresa 1", 535.00);

console.log(cliPessoa1.getMensalidade());
console.log(cliPessoa2.getMensalidade());
console.log(cliJurid.getMensalidade());

