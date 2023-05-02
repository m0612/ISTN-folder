username = "mbellizze@olmrio.com";
password = "fluminense123321";

form = document.getElementById("login-form");
form.addEventListener(("submit"), (event) =>
{
    writtenUsername = document.getElementById("username-input").value;
    writtenPassword = document.getElementById("password-input").value;
    if(writtenUsername == username && writtenPassword == password)
    {
    event.preventDefault();
    alert("Worked!");
    window.location.href = "./loggedin.html";
    }
    else
    {
        event.preventDefault();
        alertCredentials = document.getElementById("wrong-credentials");
        alertCredentials.style.display = "block";
        setInterval(() => {
            alertCredentials.style.display = "none";
        }, 10000)
    }
});