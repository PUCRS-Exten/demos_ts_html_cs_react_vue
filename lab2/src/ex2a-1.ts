let agenda: Map<string, string> = new Map<string, string>();

function cadRegistro(nome: string, nro: string): boolean {
    if (agenda.has(nome))
       return false;
    else {
        agenda.set(nome, nro);
        return(true);
    }
}

function getRegistro(nome: string): (string | undefined) {
    if (agenda.has(nome)) 
        return (agenda.get(nome));
    else {
        return(undefined);
    }
}


cadRegistro("João", "0512222222");
cadRegistro("Maria", "0513333333");
cadRegistro("José", "0514444444");
cadRegistro("Ana", "0515555555");


for (let ent of agenda.entries())
    console.log(ent);