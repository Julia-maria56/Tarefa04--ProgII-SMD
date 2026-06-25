// 14) A Média da Turma (Acumulação em Vetores de Objetos)
// Contexto: Além de apenas listar ou filtrar dados de coleções de objetos,
// frequentemente precisamos processar valores numéricos contidos dentro deles,
// como somar o faturamento de vendas ou calcular médias de notas de alunos em
// um diário de classe.
// O Desafio: Escreva uma função chamada calcularMediaTurma(listaAlunos)
// que receba um array de objetos literais, onde cada objeto possui as propriedades
// nome e nota.
// 1. Utilize um laço de repetição (for clássico ou .forEach()) para ler a nota
// de cada objeto dentro do array.
// 2. Acumule os valores dessas notas em uma variável de soma e calcule a média
// aritmética simples da turma.
// 3. Retorne o valor final da média arredondado para uma casa decimal usando
// o método .toFixed(1).
// Exemplo de entrada:
// let alunos = [
// { nome: "Tiago", nota: 8.5 },
// { nome: "Beatriz", nota: 9.0 },
// { nome: "Lucas", nota: 6.5 }
// ];
// Saída esperada: 8.0

let alunos = [
{ nome: "Tiago", nota: 8.5 },
{ nome: "Beatriz", nota: 4 },
{ nome: "Lucas", nota: 6.5 }
];

function calcularMediaTurma(listaAlunos){
    let soma = 0; 
    let mediaTurma = 0;
    listaAlunos.forEach(aluno => {
        
            soma = soma + aluno.nota;
        
    });
    mediaTurma = soma / (listaAlunos.length)
    return console.log(`A média das notas da turma é de ${mediaTurma.toFixed(1)}`)
}

calcularMediaTurma(alunos)
//A média das notas da turma é de 6.3