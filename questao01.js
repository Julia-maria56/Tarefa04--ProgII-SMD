//Contexto: Muitos iniciantes criam laços que sobrecarregam o computador sem
// necessidade. Vamos mostrar como a matemática pode poupar o processador.
// O Desafio: Escreva uma função chamada contarDivisores(n) que recebe um
// número inteiro positivo e retorna quantos divisores ele tem.

// 1. Primeira Versão da Função: Na primeira versão de código para responder ao desafio desta questão, use um laço for que percorre de 1 até n,
// como base para seu teste de quais são os divisores do número n.

function contarDivisores(n) {
    console.log("===== Versão 01 =====")
    console.time("Tempo versão 01 ")
    let contador = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            contador++;
        }
    }
    console.log(`${n} possui ${contador} divisores`)
    console.timeEnd("Tempo versão 01 ")

    console.log("=====================")
}

// 2. Primeira Versão da Função: Como estratégia para uma segunda solução
// para o desafio desta questão, sugiro que usem a estratégia do Trial Division
// Algorithm, usado para identificar um número primo. Nesta abordagem,
// ao invés de percorer todos os números entre os valoes 1 e n, o laço vai
// de 1 até √
// n. Se encontrarmos um divisor a que seja menor que √
// n,
// podemos automaticamente descobriu outro divisor, b, fazendo $ b = n/a$.
// Dessa forma, podemos procurar que números entre 1 até √
// n são divisores
// de n, caso exista, este número seria o a. Calculamos o b, através da
// expressão $ b = n/a$. Assim, teremos os pares divisores do número n.
// Como calcular o número total de divisores na prática, usando
// este processo descrito? Ao criar o seu algoritmo com um laço for()
// testando a variável i de 1 até o valor inteiro positivo de √
// n, a lógica de
// contagem fica assim:
// • Se n tiver resto zero ao ser dividido por i, você encontrou um divisor;
// • Você então verifica quem é o parceiro dele: j =
// n
// i
// .
// • Se i ̸= j, você soma 2 à sua contador de divisores - pois acabou
// de encontrar dois divisores distintos -, que você pode chamar de
// contDivisores, por exemplo;
// • Se i = j (o que só acontece se n for um quadrado perfeito), você soma
// apenas 1 ao contador, para não contar o mesmo número duas vezes.

console.log(" ")

function trialDivisionAlgorithm(n){
    console.log("===== Versão 02 =====")
    console.time("Tempo versão 02 ")
    let contador = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        let j;
        if(n % i == 0){
            j = n/i;
            if( i != j){
                contador = contador + 2;
            } 
            else{
                contador = contador + 1;
            }
        }
    }
    console.log(`${n} possui ${contador} divisores`)
    console.timeEnd("Tempo versão 02 ")
    console.log("=====================")
}

 contarDivisores(999999999);
 // Tempo versão 01 : 2.570s
 trialDivisionAlgorithm(999999999);
 // Tempo versão 02 : 1.058ms