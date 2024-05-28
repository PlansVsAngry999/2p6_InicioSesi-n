//  Página web 22/4/2024
//  Elaborado por Ricardo Daniel Hernández Sosa (PlansVsAngry999)

document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    document.getElementById("errorUser").textContent = null;
    document.getElementById("errorPwd").textContent = null;
        //Declarar variables
    var user = document.getElementById("user").value;
    var pwd = document.getElementById("pwd").value;
    
    if(user === "abc" && pwd === "123"){
            //Almacenar informacion en el navegador
        localStorage.setItem("user_name",user);
        alert("Has iniciado sesión con exito");
            //Abrir una ventana nueva
        window.location.href="spam.html";
    }else if(user != "abc" && pwd != "123"){
        document.getElementById("errorUser").textContent = "El usuario es incorrecto*";
        document.getElementById("errorPwd").textContent = "La contraseña es incorrecta*";
    }else if(user != "abc"){
        document.getElementById("errorUser").textContent = "El usuario es incorrecto*";
    }else if(pwd != "123"){
        document.getElementById("errorPwd").textContent = "La contraseña es incorrecta*";
    }

});

document.getElementById("formulario").addEventListener("reset", function(event){
    event.preventDefault();
    document.getElementById("errorUser").textContent = null;
    document.getElementById("errorPwd").textContent = null;
});