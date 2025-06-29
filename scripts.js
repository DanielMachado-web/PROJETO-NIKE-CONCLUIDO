let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");

window.addEventListener("load", () => {
    body.classList.add("loaded");
});

function mudarVisual(cor, imagem) {
    body.style.background = cor;
    tenis.classList.add("changing");
    setTimeout(() => {
        tenis.src = imagem;
        tenis.classList.remove("changing");
    }, 500);

    
}


