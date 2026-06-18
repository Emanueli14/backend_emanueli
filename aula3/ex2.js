const prompt = require("prompt-sync")();

let produtos = [];

for (let i = 1; i <= 4; i++) {
    console.log(`\nProduto ${i}`);

    let id = Number(prompt("ID: "));
    let nome = prompt("Nome: ");
    let preco = Number(prompt("Preço: "));

    produtos.push({ id, nome, preco });
}

console.log("\nProdutos Cadastrados");

for (let i = 0; i < produtos.length; i++) {
    console.log(`ID: ${produtos[i].id} | Nome: ${produtos[i].nome} | Preço: R$ ${produtos[i].preco}`);
}

console.log("\nCadastro do 5º produto");

let id = Number(prompt("ID: "));
let nome = prompt("Nome: ");
let preco = Number(prompt("Preço: "));

produtos.push({ id, nome, preco });

console.log(`\nNovo tamanho do array: ${produtos.length}`);