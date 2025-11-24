const texto = document.getElementById('Textin').innerText;
console.log(texto)


const campoNome = document.getElementById("input");
// (variavel) => {} -> Funcão anonima

campoNome.addEventListener("input", (e) => {
    console.log(e.target.value)
})

const caixa = document.getElementById("caixa");
// caixa.innerHTML = ""

const mensagem = document.getElementById("msg");
const butao = document.getElementById("btn");

butao.addEventListener("click", (e) => {
    const valor = campoNome.value;
    mensagem.textContent = "Olá" + valor;
    
    })