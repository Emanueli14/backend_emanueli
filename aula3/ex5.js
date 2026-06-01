const cadastro = [
    {
        nome: "Ana",
        idade: 16
    },
    {
        nome: "João",
        idade: 17
    },
    {
        nome: "Maria",
        idade: 15
    }
];

console.log("Cadastro de alunos:");

cadastro.forEach(aluno => {
    console.log(aluno.nome + " - " + aluno.idade + " anos");
});