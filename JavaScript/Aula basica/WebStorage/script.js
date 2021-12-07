// Voce pode fazer a mesma com o sessionStorage, a diferença é que este ele não fica salvo, se fechar o navegador ele vai perder tudo.

//localStorage deixa salvo e não perde os dados.
var nome = ""

if(typeof localStorage.nome == 'undefined'){ 
    
    localStorage.nome = prompt("Digite o seu nome: ")

}

nome = localStorage.nome

document.getElementById("nome").innerHTML = nome