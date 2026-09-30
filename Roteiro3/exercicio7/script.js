const campoNome = document.querySelector(".campo-nome");
const resultado = document.querySelector(".resultado");

campoNome.addEventListener("input", function () {

    resultado.textContent = campoNome.value;
});