// 7) O Gerador de Crachás (Operações com Strings)
// Contexto: Construir mensagens ou documentos dinâmicos juntando textos
// fixos com variáveis é o que torna as páginas web interativas e personalizadas
// para cada usuário.
// O Desafio: Crie uma função gerarCracha(nome, departamento, id) que
// una essas informações.
// 1. A função deve concatenar os parâmetros para formar o texto exato do
// crachá.
// 2. Você pode utilizar o operador + ou as modernas Template Strings (crases
// “e${}‘).
// 3. O formato de retorno deve ser estritamente: [ID] - NOME: departamento.
// Exemplo de entrada: "Carlos", "TI", 404 Saída esperada: "[404] -
// CARLOS: TI" (Observe que o nome deve ficar todo em maiúsculo na saída!)

function gerarCracha(nome, departamento, id){
    if(typeof nome == "string" && typeof departamento == "string" && typeof id == "number"){
        let textoCracha = `[${id}] - ${nome.toUpperCase()}: ${departamento}`;
        return textoCracha
    } else {
        console.log("Escreva valores válidos para cada parâmetro")
        return false;
    }
}

// console.log(gerarCracha("Julia", "TI", 13))
// [13] - JULIA: TI

// console.log(gerarCracha(4, 4, 13))
//Escreva valores válidos para cada parâmetro
// false

console.log(gerarCracha("Geraldo", "Limpeza", 3))

