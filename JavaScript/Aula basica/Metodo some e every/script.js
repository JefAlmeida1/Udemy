// Metodo some e every

//Some: verifica se tem algum ou alguns

//Exemplo
/*
let nomes = ['Lucas', 'Alves', 'Carlos']

console.log(nomes.some(nomes => nomes === 'Lucas')) */

//Exemplo de Every

let nomes = [
    {nome: 'Lucas', idade: 25},
    {nome: 'Alves', idade: 32},
    {nome: 'Luis', idade: 40}
]

console.log(nomes.every(nome => nome.idade >= 18))

if(nomes.every(nome => nome.idade >= 18)){
    console.log(" Todos são Maiores de idade")
}else{
    console.log("Alguem é de menor")
}