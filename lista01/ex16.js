const readline = require("readline-sync");

let alunos = [];

for (let i = 1; i <= 5; i++) {

    console.log("\nAluno " + i);

    let nome = readline.question("Nome: ");
    let nota = Number(readline.question("Nota: "));

    alunos.push({
        nome: nome,
        nota: nota
    });
}

let aprovados = 0;
let somaNotas = 0;

console.log("\nBoletim da Turma");

for (let i = 0; i < alunos.length; i++) {

    let situacao;

    if (alunos[i].nota >= 7) {
        situacao = "Aprovado";
        aprovados++;
    } else {
        situacao = "Reprovado";
    }

    somaNotas += alunos[i].nota;

    console.log(
        alunos[i].nome +
        " - Nota: " +
        alunos[i].nota +
        " - " +
        situacao
    );
}

let media = somaNotas / alunos.length;

console.log("\nQuantidade de aprovados: " + aprovados);
console.log("Media da turma: " + media.toFixed(2));