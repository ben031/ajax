document.getElementById("button").addEventListener("click", loadUsers);

function loadUsers() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = function () {
    if (this.status == 200) {
      const users = JSON.parse(this.responseText);

      let output = "";

      for (let i of users) {
        output += `<div class="user">
                <img src=${i.avatar_url} alt="" width="70" height="70"/>
                <ul>
                    <li>ID: ${i.id}</li>
                    <li>Login: ${i.login}</li>
                </ul>
            </div>`;
      }
      document.getElementById("users").innerHTML = output;
    }
  };

  xhr.send();
}
