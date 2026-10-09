
const usuario = JSON.parse(localStorage.getItem("logado"));
if (!usuario) {
  window.location.href = "index.html";
}


const primeiroNome = usuario.nome.split(" ")[0];
document.getElementById("saudacao").textContent = "Olá, " + primeiroNome + "!";


document.getElementById("btn-sair").addEventListener("click", () => {
  localStorage.removeItem("logado");
  window.location.href = "index.html";
});