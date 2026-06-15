const readline = require("readline-sync");

let base = Number(readline.question("Digite a base: "));
let altura = Number(readline.question("Digite a altura: "));

let area = base * altura;
let perimetro = 2 * (base + altura);

console.log(`Área: ${area}`);
console.log(`Perímetro: ${perimetro}`);