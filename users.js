const API_URL = "https://jsonplaceholder.typicode.com/users";
const usersEl = document.getElementById("users");
const fetchUsersBtnEl = document.getElementById("fetch-users");

function fetchUsers() {
  fetch(API_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      data.forEach(function (user) {
        usersEl.innerHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.username}</td>
                </tr>
            `;
      });
    })
    .catch(function () {
      console.log("ERR!!!!");
    });
}

fetchUsersBtnEl.addEventListener("click", function () {
  fetchUsers();
});
