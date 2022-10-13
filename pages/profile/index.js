/* Desenvolva sua lógica aqui...*/
import { api } from "./api.js";

const getRepo = await api.getReposi();

console.log(dados);
console.log(getRepo);
const criarCardUser = (ele) => {
  const main = document.querySelector(".User");
  const avatar = document.createElement("img");
  const nome = document.createElement("p");
  const bio = document.createElement("p");
  const email = document.createElement("button");

  const btnTrocar = document.createElement("button");

  const ul = document.createElement("ul");
  const lista = document.createElement("li");
  const nomeRepo = document.createElement("p");
  const text = document.createElement("p");
  const spanBtn = document.createElement("span");
  const btnREpo = document.creaateElement("button");
  const defiDemo = document.creaateElement("button");

  spanBtn.append(btnREpo, defiDemo);
  ul.appendChild(lista);
  lista.append(avatar, nome, bio, email, btnTrocar);
};

// avatar
// nome
// bio
// email
// repositórios
// Nome
// Descrição
// Link do repositório
// Link do site hospedado
