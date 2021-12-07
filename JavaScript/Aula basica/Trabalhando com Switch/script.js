// Switch
document.write("<br> Escolha o seu pedido: <br>")
document.write("<br> 0 - Sorvete / 1 - Suco <br>")
document.write("<br> 2 - Pizza / 3 - Agua gelada <br>")



function pedir(){
    x = prompt("O que deseja pedir?")
switch(x){

    case "0":
        alert("Sorvete")
        break;
    case "1":
        alert("Suco!")
        break;
    case "2":
        alert("Pizza!")
        break;
    case "3":
        alert("Agua gelada")
        break;
    default:
        alert("Não tem essa opção!")
}
}