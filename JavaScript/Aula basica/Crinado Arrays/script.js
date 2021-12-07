var lista = ["Junior", "Lucas", "Leandro", 15]

lista
(4) ['Junior', 'Lucas', 'Leandro', 15]
lista.indexOf("Junior")
0
lista[1]
'Lucas'
lista.join(",")
'Junior,Lucas,Leandro,15'
lista.join("-")
'Junior-Lucas-Leandro-15'
lista.pop()
15
lista
(3) ['Junior', 'Lucas', 'Leandro']
lista.shift()
'Junior'
lista
(2) ['Lucas', 'Leandro']
lista.indexOf("Lucas")
0
lista[0]
'Lucas'
lista [0] = "Lucas Ferreira"
'Lucas Ferreira'
lista.push("Junior")
3
lista
(3) ['Lucas Ferreira', 'Leandro', 'Junior']

if(lista.indexOf("Junior") > -1){ 
alert("Esse item esta na lista!!")
}else{
alert("Opa, não localizado")
}