const botao = document.querySelector(".botao");
const texto = document.querySelector(".texto");


botao.addEventListener("click", function () {

    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }

});