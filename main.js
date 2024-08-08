//transição de imagens laterais

const images = document.querySelectorAll("figure img");

let tempo = 1666;
let imagemAtual = 0;
ultimaImagem = images.length;

function proximaImagem() {
    images[imagemAtual].classList.remove("selecao");
    imagemAtual++;

    if (imagemAtual >= ultimaImagem)
        imagemAtual = 0

    images[imagemAtual].classList.add("selecao");
}

function mudaImagem() {
    setInterval(() => {
        proximaImagem()
    }, tempo)
}

window.addEventListener("load", mudaImagem)



// troca de imagem no menu mobile no cabeçalho
var checkMobile = document.getElementById("mobile");
var imgBotaoMenu = document.getElementById("imgBotaoMenu");

checkMobile.addEventListener("click", function () {
    if (checkMobile.checked) {
        imgBotaoMenu.src = "img/Menu_x.png";
    } else {
        imgBotaoMenu.src = "img/Menu-=.png";
    }
});







