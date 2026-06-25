// 9) O Mensageiro Poliglota
// Contexto: Em sistemas maduros, muitas vezes o usuário não preenche todas
// as opções disponíveis. Podemos usar “parâmetros padrão” (default parameters)
// para assumir valores automáticos sem precisarmos escrever muitos blocos de
// if/else.
// O Desafio: Escreva uma função saudarUsuario(nome, idioma = "pt").
// 1. A função deve verificar o parâmetro idioma.
// 2. Se for "pt", retorne "Olá, [nome]!". Se for "en", retorne "Hello,
// [nome]!". Se for "es", retorne "¡Hola, [nome]!".
// 3. Teste a função omitindo o segundo parâmetro para ver o valor padrão em
// ação.
// Exemplo de entrada: saudarUsuario("Ana") Saída esperada: "Olá,
// Ana!"

function saudarUsuario(nome, idioma = "pt"){
    if(typeof nome == "string" && typeof idioma == "string"){

        if(idioma !== "pt" || idioma !== "en" || idioma!=="es"){
            return console.log("Escolha entre 'pt' (português), 'en' (inglês) ou 'es' (espanhol)")
        }

        if(idioma == "pt"){
            return console.log(`Olá, ${nome}!`)
        } else if(idioma == "en"){
            return console.log(`Hello, ${nome}!`)
        } else if(idioma == "es"){
            return console.log(`¡Hola, ${nome}!`)
        }
    } else{
        return console.log("Digite um texto!")
    }
}

let nome;
let idioma;

// ===== TESTES =====

// nome = "Samira"
// saudarUsuario(nome)
// Olá, Samira!

// nome = "Chloe"
// idioma = "es"
// saudarUsuario(nome, idioma)
// ¡Hola, Chloe!

// nome = "Javier"
// idioma = "en"
// saudarUsuario(nome, idioma)
//Hello, Javier!

// nome = "Javier"
// idioma = "ty"
// saudarUsuario(nome, idioma)
//Escolha entre 'pt' (português), 'en' (inglês) ou 'es' (espanhol)