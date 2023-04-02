const form = document.getElementById("form-register");
const api = "http://localhost:5000/users/v1/register";
const Status = document.getElementById("status");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    let email = document.getElementById("Email").value;
    let body = {
        "username": username,
        "password": password,
        "email": email
    }
    fetch("http://localhost:5000/users/v1/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }).then((response) => response.json()).then((data) => {
      
      console.log(data);
      if(data.status === "success") {
        window.location='login.html';
      } else {
        Status.innerText = data.message;
      }
    })
});