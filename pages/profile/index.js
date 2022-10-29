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

  // let usuarioUsers = search;
  // console.log(usuarioUsers.name);
  let repositorio = await retornarRepo(search.login);
  console.log(repositorio);

  console.log(verificarInput());
  return repositorio;
}

export function btnEvento() {
  let btn = document.querySelector(".buttonPesquisar ");
  let input = document.getElementById("inputValue");

  btn.disabled = true;
  if (btn.disabled) {
    btn.style.cursor = "not-allowed";
  }
  input.addEventListener("keyup", (event) => {
    if (event.target.value.length !== 0) {
      btn.disabled = false;
      btn.style.cursor = "pointer";
    } else {
      btn.disabled = true;
      btn.style.cursor = "not-allowed";
    }
  });

  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    btn.innerHTML = "";

    let imgBTN = document.createElement("img");
    imgBTN.src = "./assets/loading-spinner-svgrepo-com.svg";
    // imgBTN.alt = "spinner";
    console.log(imgBTN);
    imgBTN.classList.add("spinner");

    btn.append(imgBTN);
    let username = verificarInput();
    let search = await api.pesquisarUsuario(username);
    let result = await retornarInput();
    console.log("hoi");
    localStorage.setItem("@result:", JSON.stringify(result));
    localStorage.setItem("@nome:", JSON.stringify(search));
    localStorage.setItem("@hystori:", JSON.stringify(search));

    console.error(result);

    if (result.length > 0) {
      setTimeout(() => {
        window.location.replace("/pages/profile/index.html");
      }, 2000);
      localStorage.getItem("@result:", result);
      localStorage.gettItem("@nome:", search);
    } else {
      setTimeout(() => {
        let alert = document.getElementById("alert");
        alert.innerText = "Usuario não encontrado";
      }, 2000);
    }
  });
}

btnEvento();

function pesquisados() {
  let result = JSON.parse(localStorage.getItem("@hystori:"));
  console.log(result);
  console.log(result.url);

  const ul = document.querySelector(".cards_selecionaos");
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("class", "imgPesquisados");

  img.src = result.avatar_url;

  li.appendChild(img);
  ul.appendChild(li);
}
pesquisados();
// avatar
// nome
// bio
// email
// repositórios
// Nome
// Descrição
// Link do repositório
// Link do site hospedado
