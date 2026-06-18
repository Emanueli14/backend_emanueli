const prompt = require("prompt-sync")();

let aluno = {
    nome: prompt("Digite seu nome: "),
    idade: Number(prompt("Digite sua idade: ")),
    cidade: prompt("Digite sua cidade: "),
    curso: prompt("Digite seu curso: ")
};

console.log("\nDados do Aluno");
console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Cidade: ${aluno.cidade}`);
console.log(`Curso: ${aluno.curso}`);


console.log("\nDados Atualizados");
console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Cidade: ${aluno.cidade}`);
console.log(`Curso: ${aluno.curso}`);