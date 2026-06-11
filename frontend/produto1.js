document.addEventListener("DOMContentLoaded", () => {

    /* ===== CARROSSEL ===== */
    const imagens = [
        "pictures/oferta1.jpg",
        "pictures/club1.jpg",
        "pictures/club3.webp",
        "pictures/club4.jpg",
        "pictures/club5.webp"
    ];

    let atual = 0;

    const imagemPrincipal = document.getElementById("imagemPrincipal");

    function mostrarImagem(index) {
        if (imagemPrincipal) {
            imagemPrincipal.src = imagens[index];
        }
    }

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            atual = (atual + 1) % imagens.length;
            mostrarImagem(atual);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            atual = (atual - 1 + imagens.length) % imagens.length;
            mostrarImagem(atual);
        });
    }

    /* ===== BOTÃO COMPRAR ===== */
    const btnComprar = document.getElementById("btnComprarVapormax");
    const boxCompra = document.getElementById("comprarVapormax");

    if (btnComprar && boxCompra) {

        btnComprar.addEventListener("click", () => {

            boxCompra.classList.toggle("mostrar");

            // 🔥 troca texto do botão
            if (boxCompra.classList.contains("mostrar")) {
                btnComprar.textContent = "Ocultar";
            } else {
                btnComprar.textContent = "Comprar Agora";
            }

        });

    }

});