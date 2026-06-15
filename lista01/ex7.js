const readline = require("readline-sync");

let inicio = Number(readline.question("Digite o numero inicial: "));
let fim = Number(readline.question("Digite o numero final: "));

let soma = 0;

for (let i = inicio; i <= fim; i++) {

    if (i % 2 === 0) {
        soma += i;
    }

}

console.log(`A soma dos numeros pares é ${soma}`);