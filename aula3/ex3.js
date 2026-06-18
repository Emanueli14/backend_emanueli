const prompt = require("prompt-sync")();

let produtos = [];

for (let i = 1; i <= 5; i++) {
    console.log(`\nProduto ${i}`);

    let id = Number(prompt("ID: "));
    let nome = prompt("Nome: ");
    let preco = Number(prompt("Preço: "));

    produtos.push({ id, nome, preco });
}

let produto = produtos.find(p => p.id === 3);

if (produto) {
    console.log(`\nProduto com ID 3: ${produto.nome}`);
} else {
    console.log("\nProduto com ID 3 não encontrado.");
}

let acimaDe50 = produtos.filter(p => p.preco > 50);

console.log("\nProdutos acima de R$ 50");

acimaDe50.forEach(p => {
    console.log(`${p.nome} - R$ ${p.preco}`);
});