const campo = document.querySelector(".campo");
const contador = document.querySelector(".contador");


campo.addEventListener("input", function () {
    contador.textContent = "Caracteres: " + campo.value.length;
});