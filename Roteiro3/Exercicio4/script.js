let contador = 0;

const contadorElemento = document.querySelector(".contador");
const botao = document.querySelector(".botao");

botao.addEventListener("click", function () {

    contador++;
    contadorElemento.textContent = contador;
});