import { api } from "../profile/api.js";

const search = await api.pesquisarUsuario();
console.log(search);

function verificarInput() {
  let input = document.getElementById("inputValue");
  input.includes;
}
console.log(verificarInput());
