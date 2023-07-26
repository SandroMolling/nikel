const nome = "Marcelo Eltz";
let nome2 = "";
let pessoaDefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador"
}

let nomes = ["Marceli Eltz", "Maria Silva", "Pedro Silva"];
let pessoas = [
    {
        nome: "Marcelo Eltz",
        idade: "33",
        trabalho: "Programador"
    }, 
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Desinger"
    }
];

function alterarNome() {
    nome2= "Maria Silva"
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
})

console.log(pessoas);

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
   // nome: "Maria Silva",
   // idade: "25",
   ///trabalho: "UX/UI Designer"
//})


//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();