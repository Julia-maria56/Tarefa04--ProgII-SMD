// 16) O Simulador de Conta Bancária (Métodos de Classe
// com Estado Mutável)
// Contexto: Objetos e classes não servem apenas para armazenar dados estáticos;
// eles gerenciam estados que mudam ao longo do tempo através de interações
// seguras. Em sistemas bancários ou de jogos, chamamos métodos específicos para
// alterar valores internos, simulando as regras de negócio reais da aplicação.
// O Desafio: Crie uma classe chamada ContaBancaria para gerenciar transações
// financeiras básicas.
// 1. O constructor deve receber o nome do titular e iniciar uma propriedade
// interna chamada saldo sempre com o valor padrão de 0.
// 2. Crie um método chamado depositar(valor). Esse método deve somar o
// valor recebido por parâmetro diretamente ao saldo da conta.
// 3. Crie um método chamado sacar(valor). Esse método deve verificar se o
// saldo atual é suficiente para realizar a operação. Se for, subtraia o valor do
// saldo; caso contrário, exiba no console a mensagem "Saldo insuficiente
// para o saque de R$ [valor]".
// Exemplo de teste de execução:
// const minhaConta = new ContaBancaria("Prof. Wellington");
// minhaConta.depositar(100);
// minhaConta.sacar(150); // Deve exibir aviso de saldo insuficiente

class ContaBancaria{
    constructor(titular, saldo = 0){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo = this.saldo + valor;
        return `O valor do seu saldo agora é de R$${this.saldo}`
    }
    sacar(valor){
        if(this.saldo < valor){
            return `Saldo insuficiente para o saque de R$${valor}, pois o seu saldo é de R$${this.saldo}`
        } else{
            this.saldo = this.saldo - valor;
            return `R$${valor} retirado do saldo de R$${valor + this.saldo}. Agora, o seu saldo é de R$${valor}`
        }
    }
}

const minhaConta = new ContaBancaria("Prof Wellington");
console.log(minhaConta.depositar(100))
// O valor do seu saldo agora é de R$100
console.log(minhaConta.sacar(150))
// Saldo insuficiente para o saque de R$150, pois o seu saldo é de R$100
console.log(minhaConta.sacar(50))
// R$50 retirado do saldo de R$100. Agora, o seu saldo é de R$50
