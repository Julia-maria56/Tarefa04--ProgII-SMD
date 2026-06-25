// 6) A Porta de Segurança (Comparação de Strings)
// Contexto: O JavaScript é case-sensitive, o que significa que “Senha” e “senha”
// são consideradas palavras diferentes. Além disso, espaços acidentais podem
// causar falhas em sistemas de login.
// O Desafio: Escreva uma função verificarAcesso(senhaDigitada,
// senhaCadastrada) que compara duas strings.
// 1. A função deve remover quaisquer espaços em branco no início e no final de
// ambas as strings usando .trim().
// 2. Em seguida, deve realizar uma comparação ignorando letras maiúsculas
// e minúsculas (transforme ambas para o mesmo caso antes de comparar).
// 3
// 3. Retorne true se forem iguais e false caso contrário.
// Exemplo de entrada: " Secreta123 ", "secreta123" Saída esperada:
// true

function verificarAcesso(senhaDigitada, senhaCadastrada){
    if(typeof senhaDigitada == "string" && typeof senhaCadastrada == "string"){
        senhaDigitada = senhaDigitada.trim();
        senhaCadastrada = senhaCadastrada.trim();
        if(senhaDigitada.toLowerCase() == senhaCadastrada.toLowerCase()){
            return true;
        } else {
            return false;
        }
    } else{
        console.log("Digite um texto!")
        return false
    }
}

// let senhaDigitada = "Secreta123";
// let senhaCadastrada = "secreta123";
// console.log(verificarAcesso(senhaDigitada, senhaCadastrada))
//true

// let senhaDigitada = "123";
// let senhaCadastrada = "secreta123";
// console.log(verificarAcesso(senhaDigitada, senhaCadastrada))
//false

let senhaDigitada = 2829;
let senhaCadastrada = "secreta123";
console.log(verificarAcesso(senhaDigitada, senhaCadastrada))
