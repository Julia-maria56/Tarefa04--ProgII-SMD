// 2) Inversão de Array
// Contexto: A troca de valores (swap) usando uma variável temporária é uma
// das manobras mais fundamentais na programação.
// O Desafio: Crie uma função chamada inverterArray(lista) que inverta a
// ordem dos elementos de um array **sem usar o método nativo .reverse()**.
// 1. Você deve percorrer apenas metade do array.
// 2. Em cada passo, troque o elemento da posição i pelo elemento da posição
// correspondente no final do array.
// 3. Regra de Ouro: Declare a variável temp obrigatoriamente dentro do
// bloco do laço for, utilizando let.
// Exemplo de entrada: [10, 20, 30, 40] Saída esperada: [40, 30, 20,
// 10]

function inverterArray(lista){
    let n = lista.length;
    for (let i = 0; i< Math.floor(n/2); i++){
        let temp = lista[i];
        let indiceOposto = n - 1- i;
        lista[indiceOposto] = temp;
    }
    return lista;
}

let valores = [2,3,4,1,3,4,3,4,3];
console.log(inverterArray(valores))