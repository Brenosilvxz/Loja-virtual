const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("input", () => {

    const texto = pesquisa.value.toLowerCase();

    const produtos = document.querySelectorAll(
        ".produto1, .produto2, .produto3, .produto4, .produto5, .produto6"
    );

    let encontrou = false;

    produtos.forEach(produto => {

        const nome = produto.querySelector("h3")
            .textContent.toLowerCase();

        if (nome.includes(texto)) {
            produto.style.display = "";
            encontrou = true;
        } else {
            produto.style.display = "none";
        }

    });

    const secao1 = document.querySelector(".produtos");
    const secao2 = document.querySelector(".produtos2");

    if (texto.trim() !== "") {
        secao1.classList.add("pesquisa-ativa");
        secao2.classList.add("pesquisa-ativa");
    } else {
        secao1.classList.remove("pesquisa-ativa");
        secao2.classList.remove("pesquisa-ativa");

        produtos.forEach(produto => {
            produto.style.display = "";
        });
    }

});