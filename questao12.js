// 12) O Inventário de Produtos (Objetos Literais Básicos)
// Contexto: Variáveis simples são ótimas para dados isolados, mas na vida real
// os dados andam agrupados. Um produto de e-commerce, por exemplo, possui
// nome, preço e quantidade em estoque. Objetos literais nos permitem modelar
// essas entidades do mundo real encapsulando suas propriedades em uma única
// estrutura estruturada por chaves ({}).
// O Desafio: Crie um objeto literal chamado produto que represente um item
// de tecnologia.
// 1. O objeto deve conter as propriedades: nome (string), preco (number) e
// emEstoque (boolean).
// 2. Adicione uma propriedade que seja uma função interna (um método)
// chamada calcularTotalEstoque(quantidadeDesejada). Esse método
// deve multiplicar o preço do produto pela quantidade enviada por parâmetro
// e retornar o valor monetário.
// 3. Imprima no terminal uma frase utilizando Template Strings que acione o
// método criado.
// Exemplo de Objeto Interno: nome: "Teclado Mecânico", preco: 250
// Saída esperada no console: "O valor para 3 unidades de Teclado
// Mecânico é R$ 750"

const produto = {
    nome: 'Teclado mecânico',
    preco: 12,
    emEstoque: true,
     calcularTotalValor(quantidadeDesejada){
        if( this.emEstoque == false || typeof this.preco !== "number" || typeof this.nome !== "string" || typeof quantidadeDesejada !== "number"){
             console.log("Verifique se os valores digitados são válidos ou se o produto está no estoque!");
             return;
        } else{
            let valorFinal;
            valorFinal = this.preco * quantidadeDesejada;
            return console.log(`O valor para ${quantidadeDesejada} unidades de ${this.nome} é de R$${valorFinal.toFixed(2)}`)
        }
    }
}


let quantidadeDesejada; 

// quantidadeDesejada = 3
// produto.calcularTotalValor(quantidadeDesejada);
// O valor para 3 unidades de Teclado mecânico é de R$36.00



// quantidadeDesejada = "A"
// produto.calcularTotalValor(quantidadeDesejada);
// Verifique se os valores digitados são válidos ou se o produto está no estoque!


// quantidadeDesejada = 193;
// produto.calcularTotalValor(quantidadeDesejada);
// O valor para 193 unidades de Teclado mecânico é de R$2316.00