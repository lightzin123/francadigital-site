const seletor = document.getElementById("seletorCor");
const aplicador = document.getElementById("btnAplicarCor");

aplicador.addEventListener("click", (e) => {
    const cor = seletor.value;
    document.documentElement.style.setProperty("--cor-fundo", cor)
});

const chips = document.querySelectorAll(".chip");
const galeria = document.getElementById("galeriaHero");

const imagemInicial = chips[0].dataset.imagem;

galeria.style.backgroundImage = `url()`