const readline = require('readline');

function validarSenha(senha) {
  return senha.length >= 8;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite a senha: ', (senha) => {
  if (validarSenha(senha)) {
    console.log('Senha valida');
  } else {
    console.log('Senha fraca minimo 8 caracteres');
  }
  rl.close();
});