// exemplo feito no chrome mostrando o uso do spread (...) em arrays.
/*
let primeiros = [1,2,3]

let numeros = [4,5,6]

let numero = [...primeiros,4,5,6]

console.log(numero ) // para ver ele pelo vs code, basta usar o console.log() e colocar a variavél dentro dos parenteses.

/*

// exemplo feito no chrome mostrando o uso do spread (...) em objetos.

/*
let pessoa = {
    nome: "Luis",
    idade: "20",
    cargo:"Dev"
};

let novaPessoa = {
        ...pessoa,
        anoAtual:2035,
        cidade:"SP"
};
*/


//Exemplo em função com objeto

function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo:'Programador',
        status: 1,
        codigo: '46847365'
    }
    return novosDados
}

console.log(cadastroPessoa({nome: 'Luis', sobrenome: 'Alves', anoInicio: 2034}))