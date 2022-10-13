//

export class api {
  static async pesquisarUsuario(data) {
    const options = {
      method: "GET",
    };
    await fetch(" https://api.github.com/users/Denisguedes1", options)
      .then((resp) => resp.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
  static async getReposi() {
    const options = {
      method: "GET",
    };
    await fetch(" https://api.github.com/users/Denisguedes1/repos", options)
      .then((resp) => resp.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
}
