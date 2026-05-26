function validarSenha(senha) {
    if (senha.length >= 8) {
        return "Senha válida";
    } else {
        return "Senha inválida";
    }
}

console.log(validarSenha("12345678"));
console.log(validarSenha("1234"));