const readline = require("readline-sync");

let numero = Number(readline.question("Digite um numero: "));

let resultado = numero % 2 === 0 ? "Par" : "Impar";

console.log(resultado);