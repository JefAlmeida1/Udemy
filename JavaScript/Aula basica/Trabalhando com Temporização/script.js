function acao(){
    document.write("Executando... <br>")
}

//Executando o tempo!

//setInterval(acao, 1000) //- ele vai ficar executando e repetindo de acordo com o tempo que voce for colocar na descrição.

//esse exemplo abaixo mostra a forma de para a repetição no console.
var timer = setInterval(acao, 1000)

//setTimeout(acao, 3000) //- ele vai conta 3 segundos e depois executar e não vai mais se repetir.