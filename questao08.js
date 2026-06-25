// 8) A Calculadora de Descontos
// Contexto: A funções podem receber valores, chamados parâmetros, armazenálos em variáveis e efetuar operações sobre estes valores, retornando o resultado
// deste processamento. Desta forma, elas agem como pequenas “fábricas”, processando entradas e gerando resultados, como saída.
// O Desafio: Crie uma função calcularPrecoFinal(valorProduto,
// porcentagemDesconto) que processe uma venda.
// 1. A função deve calcular quanto vale o desconto em dinheiro.
// 2. Subtraia esse desconto do valor original do produto.
// 3. Retorne o valor final a ser pago pelo cliente.
// Dica: O cálculo do desconto é feito pela fórmula: Desconto =
// V alor ×
// P orcentagem
// 100 .
// Exemplo de entrada: 150, 20 Saída esperada: 120

function calcularPrecoFinal(valorProduto, porcentagemDesconto){
    if(typeof valorProduto == "number" && typeof porcentagemDesconto == "number"){
        let valorDesconto;
        let valorFinal;

        valorDesconto = valorProduto * (porcentagemDesconto/100);
        valorFinal = valorProduto - valorDesconto;

        if(porcentagemDesconto >= 100){
            return console.log(`O preço final com desconto é de R$${valorFinal.toFixed(2)}. Ou seja, o produto é de graça!`)
        } else{
            return console.log(`O preço final com desconto é de R$${valorFinal.toFixed(2)}`)
        }
    } else {
        console.log("Digite um número válido!")
        return false;
    }
}

// ===== Testes =====

// calcularPrecoFinal(150, 20)
//O preço final com desconto é de R$120.00



//calcularPrecoFinal(178.98, 20.82)
// O preço final com desconto é de R$141.72



//calcularPrecoFinal("Teste com string", 20.82)
// Digite um número válido!



//calcularPrecoFinal(456, 100)
// O preço final com desconto é de R$0.00



//calcularPrecoFinal(456, 150)
//O preço final com desconto é de R$-228.00



// calcularPrecoFinal(1029383, 1.3)
// O preço final com desconto é de R$1016001.02