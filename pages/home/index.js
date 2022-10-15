import { api } from "../profile/api.js";
// function verificarInput() {
//   let input = document.getElementById("inputValue");
//   let value = input.value;
//   return value;
// }

export async function retornarInput(username) {
  // let username = verificarInput();
  let search = await api.pesquisarUsuario(username);
  let usuarioFdp = search;
  console.log(usuarioFdp.name);
  const { name, avatar_url, bio } = await search;

  console.error(search);
  let repositorio = await retornarRepo(search.login);
  console.log(repositorio);

  // return repositorio;
}

async function renderUser() {
  let myItem = JSON.parse(localStorage.getItem("@nome:"));
  console.log(myItem);
  const { name, avatar_url, bio, email } = myItem;
  const main = document.getElementById("user");
  const span = document.createElement("span");
  span.setAttribute("class", "spanUsers");

  const btnEmail = document.createElement("button");
  const nome = document.createElement("p");
  const avatar = document.createElement("img");
  btnEmail.setAttribute("class", "buttonEmail");
  avatar.setAttribute("class", "img_avatar");
  nome.setAttribute("class", "nameAvatar");
  const bioTag = document.createElement("p");
  const btntrocarUsers = document.createElement("button");
  btntrocarUsers.setAttribute("class", "trocarDeUser");
  btntrocarUsers.innerText = "trocar usuario";
  bioTag.setAttribute("class", "bio");
  // if (email === null) {
  //   btnEmail.innerText = email;
  // } else {
  //   btnEmail.innerText = "Email";
  // }
  btnEmail.innerText = "Email";
  nome.innerText = name;
  avatar.src = avatar_url;

  if (bio === null) {
    bioTag.innerText = "Esse Usuario nao definiu sua bio";
  } else {
    bioTag.innerText = bio;
  }
  span.append(avatar, nome, bioTag, btnEmail, btntrocarUsers);

  main.append(span);
  main.appendChild(span);
}
renderUser();
let result = JSON.parse(localStorage.getItem("@result:"));
console.log(result);
function renderRepo() {
  let result = JSON.parse(localStorage.getItem("@result:"));
  console.log(result);
  const ul = document.querySelector(".ReposiUser");
  ul.innerHTML = "";
  result.forEach((elem) => {
    const lista = document.createElement("li");
    lista.setAttribute("class", "conteinerRepo");
    const nomeRepo = document.createElement("h1");
    nomeRepo.setAttribute("class", "nomeRepo");
    const descricao = document.createElement("p");
    descricao.setAttribute("class", "descricaoRepo");
    const button = document.createElement("button");
    const btnEspeci = document.createElement("button");
    button.setAttribute("class", "buttonRepo");
    btnEspeci.setAttribute("class", "branch");

    nomeRepo.innerText = elem.name;
    descricao.innerText = elem.description;

    button.innerText = "repositorio";
    btnEspeci.innerText = elem.default_branch;

    lista.append(nomeRepo, descricao, button, btnEspeci);
    ul.appendChild(lista);
  });
}
renderRepo();
export async function retornarRepo(username) {
  let repositorio = await api.getReposi(username);

  // console.error(repositorio);
  return repositorio;
}
