const readline = require("readline-sync");

function calcular(a, b, operacao) {
    return operacao(a, b);
}

let a = Number(readline.question("Digite o primeiro numero: "));
let b = Number(readline.question("Digite o segundo numero: "));

console.log(`Soma: ${calcular(a, b, (x, y) => x + y)}`);
console.log(`Subtracao: ${calcular(a, b, (x, y) => x - y)}`);
console.log(`Multiplicacao: ${calcular(a, b, (x, y) => x * y)}`);