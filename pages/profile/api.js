//

export class api {
  static async pesquisarUsuario(username) {
    const options = {
      method: "GET",
      headers: { "Content-type": "application/json" },
    };
    console.log(username);
    return await fetch(`https://api.github.com/users/${username}`, options)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => console.log(err));
  }
  static async getReposi(username) {
    const options = {
      method: "GET",
    };
    return await fetch(
      `https://api.github.com/users/${username}/repos`,
      options
    )
      .then((resp) => resp.json())
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));
  }
}
