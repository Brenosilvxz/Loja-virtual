const imagens = [
    "pictures/calcados1.jpg",
    "pictures/vapormax1.jpg",
    "pictures/vapormax2.jpg",
    "pictures/vapormax3.jpg",
    "pictures/vapormax4.jpg"
];

let atual = 0;

const imagemPrincipal = document.getElementById("imagemPrincipal");

function mostrarImagem(index) {
    if (imagemPrincipal) {
        imagemPrincipal.src = imagens[index];
    }
}

/* ===== CARROSSEL ===== */
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (next) {
    next.addEventListener("click", () => {
        atual = (atual + 1) % imagens.length;
        mostrarImagem(atual);
    });
}

if (prev) {
    prev.addEventListener("click", () => {
        atual = (atual - 1 + imagens.length) % imagens.length;
        mostrarImagem(atual);
    });
}

/* ===== BOTÃO COMPRAR / OCULTAR ===== */
const btn = document.getElementById("btnComprarVapormax");
const compra = document.getElementById("comprarVapormax");

if (btn && compra) {

    btn.addEventListener("click", () => {

        compra.classList.toggle("mostrar");

        /* 🔥 TROCA TEXTO DO BOTÃO */
        if (compra.classList.contains("mostrar")) {
            btn.textContent = "Ocultar";
        } else {
            btn.textContent = "Comprar Agora";
        }

    });

}