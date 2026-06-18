const prompt = require("prompt-sync")();

let alunos = [];

for (let i = 1; i <= 5; i++) {
    console.log(`\nAluno ${i}`);

    let id = Number(prompt("ID: "));
    let nome = prompt("Nome: ");
    let nota = Number(prompt("Nota: "));

    alunos.push({ nome, nota });
}

let resultado = alunos.map(aluno => ({
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
}));

console.log("\nResultado");

resultado.forEach(aluno => {
    console.log(
        `${aluno.nome} - Nota: ${aluno.nota} - ${aluno.situacao}`
    );
});