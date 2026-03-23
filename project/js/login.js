document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if(user === "admin" && password === "1234"){
        window.location.href = "index.html"; // redirige
    } else {
        alert("Datos incorrectos");
    }
});