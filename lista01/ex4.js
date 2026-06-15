const readline = require("readline-sync");

let linhas = Number(readline.question("Digite a quantidade de linhas: "));

let triangulo = "";

for (let i = 0; i < linhas; i++) {
    triangulo += "#";
    console.log(triangulo);
}