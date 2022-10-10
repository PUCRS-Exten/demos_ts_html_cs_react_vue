function toMaiusculaPrimeira(s: string) : string {
    return s[0].toLocaleUpperCase() + s.substring(1);
}


console.log("casa -> %s", toMaiusculaPrimeira("casa"));
console.log("Super -> %s", toMaiusculaPrimeira("Super"));
