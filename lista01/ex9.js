const readline = require("readline-sync");

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let n1 = Number(readline.question("Digite o primeiro numero: "));
let n2 = Number(readline.question("Digite o segundo numero: "));

console.log(`O menor numero é ${min(n1, n2)}`);