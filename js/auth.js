const usuarios = () => JSON.parse(localStorage.getItem("usuarios") || "[]");

const formCadastro = document.getElementById("form-cadastro");
if (formCadastro) {
  formCadastro.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    if (senha.length < 8) {
      erro.textContent = "A senha precisa ter no mínimo 8 caracteres.";
      return;
    }
    if (usuarios().some((u) => u.email === email)) {
      erro.textContent = "Este e-mail já está cadastrado.";
      return;
    }
    const lista = usuarios();
    lista.push({ nome, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(lista));
    window.location.href = "index.html";
  });
}

const formLogin = document.getElementById("form-login");
if (formLogin) {
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const user = usuarios().find((u) => u.email === email && u.senha === senha);

    if (!user) {
      document.getElementById("erro").textContent = "E-mail ou senha incorretos.";
      return;
    }
    localStorage.setItem("logado", JSON.stringify(user));
    window.location.href = "inicio.html";
  });
}