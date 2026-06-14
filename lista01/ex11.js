const readline = require("readline-sync");

function podeVotar(idade) {
    return idade >= 16;
}

let idade = Number(readline.question("Digite sua idade: "));

if (podeVotar(idade)) {
    console.log("Pode votar.");
} else {
    console.log("Não pode votar.");
}