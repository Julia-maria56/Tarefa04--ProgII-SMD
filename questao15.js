// 15) A Fábrica de Carros (Criação de Classes e Instanciação)
// Contexto: Objetos literais são excelentes para estruturas rápidas, mas se
// precisarmos criar centenas de objetos com as mesmas propriedades e métodos,
// copiar e colar chaves se torna inviável. O ES6 introduziu a palavra-chave
// class, que funciona como uma “fôrma” ou “fábrica” de objetos, permitindo a
// instanciação padronizada de novas entidades através do operador new.
// O Desafio: Crie uma classe chamada Carro que sirva de molde para fabricar
// automóveis virtuais.
// 1. A classe deve possuir um método especial chamado constructor que
// receba os parâmetros marca, modelo e ano, atribuindo-os às propriedades
// internas da instância através do operador contextual this.
// 2. Adicione um método comum chamado obterDescricao() dentro da classe
// que retorne o texto: "Este carro é um [marca] [modelo] ano [ano]".
// 3. Instancie dois carros diferentes usando o operador new e exiba o resultado
// do método obterDescricao() de ambos no console.
// Exemplo de chamada: const meuCarro = new Carro("Toyota",
// "Corolla", 2024); Saída esperada no console: "Este carro é um
// Toyota Corolla ano 2024"

class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
     obterDescricao() {
        return `Este carro é um ${this.marca} ${this.modelo} ano ${this.ano}.`;
    }
}

const meuCarro1 = new Carro("BWD", "Preto",1982)
const meuCarro2 = new Carro("Fiat", "Branco",2022)

console.log(meuCarro1.obterDescricao());
console.log(meuCarro2.obterDescricao());