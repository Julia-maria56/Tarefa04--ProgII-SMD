// 13) O Relatório do Painel (Vetor de Objetos Literais e
// Iteração)
// Contexto: Sistemas de gestão e dashboards não lidam com apenas um objeto,
// mas sim com listas deles. Em JavaScript, representamos isso combinando vetores
// (Arrays) com objetos literais. Saber iterar sobre essas estruturas e extrair
// propriedades específicas é uma habilidade fundamental para manipular dados
// vindos de APIs e bancos de dados.
// O Desafio: Crie um array chamado usuarios contendo 3 objetos literais. Cada
// objeto deve representar um usuário com as propriedades: id, nome e ativo
// (boolean).
// 1. Utilize o método .forEach() para percorrer o vetor usuarios.
// 2. Para cada usuário cadastrado, verifique se a propriedade ativo é verdadeira.
// 3. Exiba no terminal uma mensagem personalizada apenas para os usuários
// que estiverem com o status ativo no sistema.
// Exemplo de entrada (Array):
// let usuarios = [
// { id: 1, nome: "Wellington", ativo: true },
// { id: 2, nome: "Ana", ativo: false },
// { id: 3, nome: "Carlos", ativo: true }
// ];
// Saída esperada no console:
// Usuário Ativo: Wellington (ID: 1)
// Usuário Ativo: Carlos (ID: 3)

let usuarios = [
    { id: 1, nome: "Wellington", ativo: true },
    { id: 2, nome: "Ana", ativo: false },
    { id: 3, nome: "Carlos", ativo: true }
];

usuarios.forEach((usuario) => {
    if(usuario.ativo){
        console.log(`Usuário ativo: ${usuario.nome} (ID: ${usuario.id})`)
    }

});