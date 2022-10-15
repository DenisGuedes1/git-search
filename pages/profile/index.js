import { api } from "./api.js";
export async function retornarRepo(username) {
  let repositorio = await api.getReposi(username);
  console.error(repositorio);
  return repositorio;
}
function verificarInput() {
  let input = document.getElementById("inputValue");
  return input.value;
}
export async function retornarInput() {
  let username = verificarInput();
  let search = await api.pesquisarUsuario(username);
  console.log(search.login);
  // let usuarioUsers = search;
  // console.log(usuarioUsers.name);
  let repositorio = await retornarRepo(search.login);
  console.log(repositorio);

  console.log(verificarInput());
  return repositorio;
}
function btnEvento() {
  let btn = document.querySelector(".buttonPesquisar ");
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    let username = verificarInput();
    let search = await api.pesquisarUsuario(username);
    let result = await retornarInput();
    console.log("hoi");
    localStorage.setItem("@result:", JSON.stringify(result));
    localStorage.setItem("@nome:", JSON.stringify(search));

    console.error(result);

    if (result) {
      window.location.replace("/pages/profile/index.html");
      localStorage.getItem("@result:", result);
      localStorage.gettItem("@nome:", search);
    } else {
      alert("usuario nao encontrado");
    }
  });
}
btnEvento();

// avatar
// nome
// bio
// email
// repositórios
// Nome
// Descrição
// Link do repositório
// Link do site hospedado
