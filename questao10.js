// 10) Encurtando o Código
// Contexto: As Arrow Functions surgiram no ES6 para tornar o código mais
// limpo e conciso, sendo amplamente utilizadas como funções de callback e em
// métodos de manipulação de arrays modernos.
// O Desafio: Observe a função clássica abaixo, que converte uma temperatura
// de Celsius para Fahrenheit:
// function converterParaFahrenheit(celsius) {
// return (celsius * 1.8) + 32;
// }
// 1. Reescreva essa mesma lógica criando uma função anônima e atribuindo-a
// a uma constante chamada converterParaFahrenheit.
// 2. Utilize a sintaxe de Arrow Function (=>).
// 3. Se possível, simplifique-a para o formato de retorno implícito (em uma
// única linha, omitindo as chaves {} e a palavra return).

const converterParaFahrenheit = (celsius) =>  ((celsius * 1.8) + 32).toFixed(1);

// ===== TESTES =====
// let celsius = 45
// console.log(converterParaFahrenheit(celsius));
//113.0

// let celsius = 34
// console.log(converterParaFahrenheit(celsius));
// 93.2

// let celsius = 193
// console.log(converterParaFahrenheit(celsius));
//379.4