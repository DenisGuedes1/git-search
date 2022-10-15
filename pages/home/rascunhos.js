import { api } from "../profile/api.js";

function verificarInput() {
  let input = document.getElementById("inputValue");
  let value = input.value;
  return value;
}
export async function retornarInput() {
  let username = verificarInput();
  let search = await api.pesquisarUsuario(username);
  let usuarioFdp = search;
  console.log(usuarioFdp.name);
  const { name, avatar_url, bio } = await search;
  // renderUser(name, avatar_url, bio);

  console.error(search);
  let repositorio = await retornarRepo(search.login);
  console.log(repositorio);

  // console.log(verificarInput());
  return repositorio;
}
let username = verificarInput();
let search = await api.pesquisarUsuario(username);
let usuarioFdp = search;
console.log(usuarioFdp.name);
async function renderUser(name, avatar_url, bio) {
  const main = document.getElementById("user");
  const nome = document.createElement("p");
  const avatar = document.createElement("img");
  const bioTag = document.createElement("p");

  nome.innerText = name;
  avatar.src = avatar_url;

  if (bio) {
    bioTag.innerText = "Esse Usuario nao definiu sua bio";
  } else {
    bioTag.innerText = bio;
  }

  main.append(avatar, nome, bioTag);
}
console.log("heloow word");

// renderUser();
export async function retornarRepo(username) {
  let repositorio = await api.getReposi(username);

  // console.error(repositorio);
  return repositorio;
}

////////////
///////////
//////////

////////
///////
////////////

// function btnEvento() {
//   let btn = document.querySelector(".buttonPesquisar ");
//   btn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     let result = await retornarInput();

//     // console.error(result);

//     if (result) {
//       window.location.replace("/pages/profile/index.html");
//     } else {
//       alert("usuario nao encontrado");
//     }
//   });
// }
// btnEvento();
