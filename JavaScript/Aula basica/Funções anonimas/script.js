
//Pratica antiga de função anomina
/*function adicionar(...numeros){
    let total = numeros.reduce(function(total, proximo){
        return total + proximo
    })
    console.log(total)
}

adicionar(1,2,3,4,5)*/

//forma nova ES6 de forma reduzida e com os mesmo resultados
function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => total + proximo)

    console.log(total)
}

adicionar(1,2,3,4,5)