const form = document.getElementById("form-login");
const Status = document.getElementById("status");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    let body = {
        "username": username,
        "password": password
    }
    fetch("http://localhost:5000/users/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }).then((response) => response.json()).then((data) => {
        console.log(data);
      if (data.status === "success") {
        window.location='main.html';
      } else {
        Status.innerText = data.message;
      }
    })
});