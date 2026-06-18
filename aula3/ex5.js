const prompt = require("prompt-sync")();

let produtos = [];

for (let i = 1; i <= 3; i++) {
    console.log(`\nProduto ${i}`);

    let nome = prompt("Nome do produto: ");
    let preco = Number(prompt("Preço: "));

    produtos.push({ nome, preco });
}

let produtosFiltrados = produtos.filter(
    produto => produto.preco > 20
);

console.log("\n=== Produtos acima de R$ 20 ===");

produtosFiltrados.forEach(produto => {
    console.log(`${produto.nome} - R$ ${produto.preco}`);
});