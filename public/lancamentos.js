const btnSaibaMais = document.getElementById("btnSaibaMais");
const detalhes = document.getElementById("detalhesVapormax");

btnSaibaMais.addEventListener("click", () => {

    detalhes.classList.toggle("ativo");

    if (detalhes.classList.contains("ativo")) {

        detalhes.scrollIntoView({
            behavior: "smooth"
        });

        btnSaibaMais.textContent = "Ocultar";

    } else {

        btnSaibaMais.textContent = "Saiba Mais";

    }

});


const btnComprar = document.getElementById("btnComprar");
const comprar = document.getElementById("comprarVapormax");

btnComprar.addEventListener("click", () => {

    comprar.classList.toggle("ativo");

    if(comprar.classList.contains("ativo")){

        comprar.scrollIntoView({
            behavior: "smooth"
        });

        btnComprar.textContent = "Ocultar Compra";

    } else {

        btnComprar.textContent = "Comprar Agora";

    }

});






const btnSaibaAirmax = document.getElementById("btnSaibaAirmax");
const detalhesAirmax = document.getElementById("detalhesAirmax");

btnSaibaAirmax.addEventListener("click", () => {

    detalhesAirmax.classList.toggle("ativo");

    if (detalhesAirmax.classList.contains("ativo")) {
        btnSaibaAirmax.textContent = "Ocultar";
    } else {
        btnSaibaAirmax.textContent = "Saiba Mais";
    }

});

const btnComprarAirmax = document.getElementById("btnComprarAirmax");
const comprarAirmax = document.getElementById("comprarAirmax");

btnComprarAirmax.addEventListener("click", () => {

    comprarAirmax.classList.toggle("ativo");

    if (comprarAirmax.classList.contains("ativo")) {
        btnComprarAirmax.textContent = "Ocultar compra";
    } else {
        btnComprarAirmax.textContent = "Comprar Agora";
    }

});