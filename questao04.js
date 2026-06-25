// 4) O Padronizador de Nomes (Alteração de Strings com
// toUpperCase)
// Contexto: Quando recebemos dados de usuários, é comum que a formatação
// venha bagunçada (como letras maiúsculas no meio de palavras). Padronizar
// esses dados é uma tarefa diária no desenvolvimento de software.
// O Desafio: Crie uma função chamada formatarNome(nomeBaguncado) que
// receba uma string com o nome de uma pessoa escrito de forma irregular.
// 1. A função deve transformar a primeira letra em maiúscula utilizando
// .toUpperCase().
// 2. O restante do nome deve ser transformado em letras minúsculas utilizando
// .toLowerCase().
// 3. Concatene as duas partes e retorne o nome corrigido.
// Exemplo de entrada: "mArIA" Saída esperada: "Maria"

function formatarNome(nomeBaguncado){
    let nomeOrganizado = "";
    if(typeof nomeBaguncado == "string"){
        for(let i = 0; i < nomeBaguncado.length; i++){
            let primeiraLetraOrganizada = nomeBaguncado[0].toUpperCase()
            let letrasRestantesOrganizadas = nomeBaguncado.slice(1).toLowerCase()
            resultado = primeiraLetraOrganizada + letrasRestantesOrganizadas
        }
    } else {
        return console.log("Digite um texto!")
    }
    console.log(resultado)
}

// let nomeBaguncado = 8
// return formatarNome(nomeBaguncado)
// Digite um texto!

// let nomeBaguncado = "jUlIA"
// return formatarNome(nomeBaguncado)
//Julia