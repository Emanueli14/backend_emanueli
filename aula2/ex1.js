const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return b === 0 ? 'Erro: divisao por zero' : a / b;
}

readline.question('Digite o primeiro numero: ', answer1 => {
  readline.question('Digite o segundo numero: ', answer2 => {
    const n1 = parseFloat(answer1.replace(',', '.'));
    const n2 = parseFloat(answer2.replace(',', '.'));

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      console.log('Erro: entrada invalida');
    } else {
      console.log(`Soma: ${somar(n1, n2)}`);
      console.log(`Subtracao: ${subtrair(n1, n2)}`);
      console.log(`Multiplicacao: ${multiplicar(n1, n2)}`);
      console.log(`Divisao: ${dividir(n1, n2)}`);
    }

    readline.close();
  });
});
