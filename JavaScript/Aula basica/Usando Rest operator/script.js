//usando Rest Operator

// neste exemplo aqui podemos ver que esta sendo usado os tres pontos(...) na função dentro dos parenteses da funsão, isto se chama Ret Operator.
/*
function minhaLista(...nomes){
    console.log(nomes)
}

minhaLista("Luis", "Alves", "Dado")


function meusnumeros(...numeros){
    console.log(numeros)
}

meusnumeros(1,2,3,4,5,6,7,8,9,10)

*/

function cadastrar(usuarios, ...novosusuarios){ // aqui se com os tres pontos dentro da função se chama Rest Operator.
    
    //console.log(...usuarios, ...novosusuarios) tentativa minha de juntar eles.

    let totalusuarios = [
        ...usuarios,  //para não confundir, aqui os tres pontos neste caso se chama Spread operator.
        ...novosusuarios
    ]
    return console.log(totalusuarios)
}

let usuarios = ['Luis', 'Alves']

let novosusuarios = cadastrar(usuarios, 'Junior', 'Lucas')

