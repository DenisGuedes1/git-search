import { api } from "../profile/api.js";

function verificarInput() {
  let input = document.getElementById("inputValue");
  return input.value;
}
async function retornarInput() {
  let username = verificarInput();
  let search = await api.pesquisarUsuario(username);
  console.error(search);

  console.log(verificarInput());
  return search;
}

function btnEvento(e) {
  let btn = document.querySelector(".buttonPesquisar");
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    let result = await retornarInput();
    console.error(result);

    if (result) {
      // window.location.replace("/pages/profile/index.html");
    } else {
      alert("usuario nao encontrado");
    }
  });
}
btnEvento();
// function btnEvento(e) {
//   let btn = document.querySelector(".buttonPesquisar");
//   btn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     let result = await retornarInput();
//     console.error(result);

//     if (result) {
//       // window.location.replace("/pages/profile/index.html");
//     } else {
//       alert("usuario nao encontrado");
//     }
//   });
// }
// btnEvento();
// function verificarInput() {
//   let input = document.getElementById("inputValue");
//   return input.value;
// }
// async function retornarInput() {
//   let username = verificarInput();
//   let search = await api.pesquisarUsuario(username);
//   console.error(search);

//   console.log(verificarInput());
//   return search;
// }
