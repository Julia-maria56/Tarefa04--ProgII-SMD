// 11) A Lista de Compras
// Contexto: Enquanto o laço for tradicional exige um controle manual de índices,
// o método .forEach() nos permite executar uma função diretamente para cada
// item de um array, deixando a leitura do código mais natural (declarativa).
// O Desafio: Você tem um array de produtos: let carrinho = ["Maçã",
// "Pão", "Leite", "Café"].
// 1. Utilize o método .forEach() para percorrer o array.
// 2. Para cada elemento, exiba no console uma mensagem formatada contendo
// a posição do item e o nome dele.
// 3. O índice deve começar em 1, não em 0 (apenas visualmente).
// Saída esperada no console:
// Produto 1: Maçã
// Produto 2: Pão
// Produto 3: Leite
// Produto 4: Café
// PARADA OBRIGATÓRIA: O que significa a sigla ES6?
// No Exercício 10, mencionamos que as Arrow Functions surgiram
// no ES6. Mas o que exatamente é isso? O ES6 é a abreviação
// de ECMAScript 6 (oficialmente chamado de ECMAScript 2015).
// O ECMAScript é o “manual de regras” ou a especificação padrão
// que dita como a linguagem JavaScript deve funcionar em qualquer
// navegador.
// A sexta edição desse manual (ECMAScript Version 6 - ES6), lançada
// no ano de 2015, foi uma das maiores atualizações sofridas pela
// linguagem JavaScript. Ela modernizou completamente a linguagem e
// introduziu ferramentas que hoje consideramos indispensáveis no dia
// a dia, como: * A sintaxe enxuta das Arrow Functions (=>); * A
// criação de variáveis com let e const (que trouxeram mais segurança
// em relação ao antigo var); * As Template Strings (o uso de crases
// e ${} que vimos no Exercício 7); * Os Parâmetros Padrão em
// funções (que vimos no Exercício 9).
// É por causa do impacto gigantesco dessa atualização que, no mundo
// do desenvolvimento web, frequentemente dividimos a história da linguagem entre o “JavaScript Clássico” (antes de 2015) e o “JavaScript
// Moderno” (do ES6 em diante).

let carrinho = ["Maçã","Pão", "Leite", "Café"]

carrinho.forEach((comida, index) => console.log(`Produto ${index + 1}: ${comida}`));
