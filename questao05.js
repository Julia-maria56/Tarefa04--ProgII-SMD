// 5) O Caçador de Domínios (Extração de Substrings)
// Contexto: Frequentemente precisamos extrair apenas um “pedaço” de um texto
// maior, como a sigla de um estado em um endereço completo ou o domínio de
// um e-mail para descobrir a empresa do usuário.
// O Desafio: Crie uma função chamada extrairDominio(email) que receba um
// endereço de e-mail completo.
// 1. Utilize o método .indexOf() para encontrar a posição do caractere @.
// 2. Use o método .slice() ou .substring() para extrair apenas o domínio
// (tudo o que vem logo após o @).
// 3. Retorne o domínio extraído.
// Dica: O método .slice(inicio) extrai da posição inicio até o
// final da string caso o segundo parâmetro seja omitido.

// Exemplo de entrada: "aluno.estudioso@universidade.edu.br" Saída esperada: "universidade.edu.br"

function extrairDominio(email){
    if(typeof email == "string"){
        let dominio;
        let posicaoArroba = email.indexOf("@");
        //console.log(posicaoArroba)
        dominio = email.slice(posicaoArroba + 1)
        console.log(dominio);

    } else {
        console.log("Digite um email válido!")
        return false
    }
}

// let email = 23;
// return extrairDominio(email)
// Digite um email válido!

let email = "julia.maria07@alu.ufc.br";
return extrairDominio(email)