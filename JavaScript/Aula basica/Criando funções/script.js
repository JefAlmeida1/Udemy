function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite o seu nome: ');

    if(texto == ''|| texto == null){
        alert('Digite o seu nome!');
        area.innerHTML = 'Bem vindo...'; //o innerHTML vai adicionar a estring ou o elemento no corpo do HTML.
    }else{
        area.innerHTML = 'Bem vindo ' + texto;
    }

    
}
