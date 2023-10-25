function minhaFuncao(){
    alert("botao 1 foi clicado")
}
document.getElementById('botao2').addEventListener('click',function(){
    alert("O botão 2 foi clicado")
});

$("#botao3").click(function(){
    alert("Botão 3 foi clicado")
});

var emelemto = document.getElementByID('meuElementi');

elemento.addEventListener('mouseover',function(){
    elemento.style.backgroundColor + 'lightblue';
});

var campo = document.getElementByID('meuCampo');
var mensagem = document.getElementByID('mensagem');

campo.addEventListener('keydown',function(event){
    mensagem.textContent = 'Tecla liberada: ' + event.key;
});
