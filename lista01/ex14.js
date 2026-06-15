const readline = require("readline-sync");

function reverter(array) {
    let novoArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]);
    }

    return novoArray;
}

let numeros = readline.question("Digite numeros separados por virgula: ");

let array = numeros.split(",");

console.log(reverter(array));