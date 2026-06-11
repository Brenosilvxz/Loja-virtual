function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("registerForm").classList.add("hidden");
}

function showRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}

/* ===================== LOGIN ===================== */
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector("input[type='text']").value.trim();
    const senha = this.querySelector("input[type='password']").value.trim();

    if (!email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    if (!email.includes("@")) {
        alert("Digite um email válido!");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres!");
        return;
    }

    alert("Login realizado com sucesso!");
    window.location.href = "index.html";
});


/* ===================== CADASTRO ===================== */
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = this.querySelector("input[type='text']").value.trim();
    const email = this.querySelectorAll("input")[1].value.trim();
    const senha = this.querySelector("input[type='password']").value.trim();

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    if (!email.includes("@")) {
        alert("Digite um email válido!");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres!");
        return;
    }

    alert("Conta criada com sucesso!");
    showLogin();
});