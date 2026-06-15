const readline = require("readline-sync");

function contarLetra(texto, letra) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }

    return contador;
}

let texto = readline.question("Digite um texto: ");
let letra = readline.question("Digite uma letra: ");

console.log(`A letra aparece ${contarLetra(texto, letra)} vezes.`);