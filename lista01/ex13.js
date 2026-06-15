const readline = require("readline-sync");

function range(inicio, fim) {
    let numeros = [];

    for (let i = inicio; i <= fim; i++) {
        numeros.push(i);
    }

    return numeros;
}

function soma(array) {
    let total = 0;

    for (let numero of array) {
        total += numero;
    }

    return total;
}

let inicio = Number(readline.question("Digite o inicio: "));
let fim = Number(readline.question("Digite o fim: "));

let lista = range(inicio, fim);

console.log(lista);
console.log(`Soma: ${soma(lista)}`);