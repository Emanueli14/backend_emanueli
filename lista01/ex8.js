const readline = require("readline-sync");

let tamanho = Number(readline.question("Digite o tamanho do tabuleiro: "));

let resultado = "";

for (let i = 0; i < tamanho; i++) {

    for (let j = 0; j < tamanho; j++) {

        if ((i + j) % 2 == 0) {
            resultado += "#";
        } else {
            resultado += " ";
        }

    }

    resultado += "\n";
}

console.log(resultado);