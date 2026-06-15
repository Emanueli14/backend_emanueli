const readline = require("readline-sync");

let produtos = [];

for (let i = 1; i <= 5; i++) {

    console.log(`\nProduto ${i}`);

    let id = Number(readline.question("ID: "));
    let nome = readline.question("Nome: ");
    let preco = Number(readline.question("Preco: "));

    produtos.push({
        id,
        nome,
        preco
    });
}

let buscarId = Number(readline.question("\nDigite o ID que deseja buscar: "));

let produto = produtos.find(p => p.id === buscarId);

console.log("\nProduto encontrado:");
console.log(produto);

let acimaDe100 = produtos.filter(p => p.preco > 100);

console.log("\nProdutos acima de R$100:");
console.log(acimaDe100);

let nomes = produtos.map(p => p.nome);

console.log("\nNomes dos produtos:");
console.log(nomes);


console.log("\nLista completa:");

produtos.forEach(p => {
    console.log(`ID: ${p.id} | Nome: ${p.nome} | Preço: R$${p.preco}`);
});