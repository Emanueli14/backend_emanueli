const notas = [6, 8, 5, 9, 7, 4, 10];

const aprovados = notas.filter(nota => nota >= 7);

console.log("Notas aprovadas:");
console.log(aprovados);