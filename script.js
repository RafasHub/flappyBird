
var bloco = document.getElementById("bloco")
var buraco = document.getElementById("buraco")
var personagem = document.getElementById("personagem")
var pulando = 0;
var pontos = 0;

buraco.addEventListener('animationiteration', ()=>{
    var random = -((Math.random()*300)+150)
    buraco.style.top=random+"px"
    pontos++
})

document.addEventListener('keydown', (event) => {
	pular()
});

setInterval(function(){
    var topoDoPersonagem = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"))
    if(pulando == 0){
        personagem.style.top = (topoDoPersonagem+3)+"px"
    }
    var blocoEsquerda = parseInt(window.getComputedStyle(bloco).getPropertyValue("left"))
    var buracoTopo =parseInt(window.getComputedStyle(buraco).getPropertyValue("top"))
    var cTopo = -(500 - topoDoPersonagem)
    if(topoDoPersonagem>480||((blocoEsquerda<20)&&(blocoEsquerda>-50)&&((cTopo<buracoTopo)||(cTopo>buracoTopo+130)))){
        alert("você morreu! sua pontuação foi: " + (pontos-1))
        personagem.style.top = 100 +"px"
        pontos = 0;
    }
},10)

function pular(){
    pulando = 1
    var quantidadeDePulos =0
    var intervaloDePulo = setInterval(function(){
        var topoDoPersonagem = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"))

        if((topoDoPersonagem>6) &&( quantidadeDePulos<15)){
            personagem.style.top = (topoDoPersonagem-5)+"px"
        }
        if(quantidadeDePulos>20){
            clearInterval(intervaloDePulo)
            pulando = 0
            quantidadeDePulos = 0;
        }
        quantidadeDePulos++
    },10)

}