boton.addEventListener("click", verifica_login)   
         
function verifica_login() {
                  
    let rgex_user = /[ \ " ' ]/;
    let rgex_user_pass = /[.-]/;

    let user_login = document.getElementById("user_form");
    let pass_login = document.getElementById("pass_form");

    let error_user = rgex_user.test(user_login.value);

    if (error_user) {
        alert("No se puede usuario contiene algun caracter invalido");
    }
    error_user = rgex_user_pass.test(pass_login.value);

    if (error_user) {
        alert("No se puede Password contiene algun caracter invalido");
    }
            
    if (login_form.value.length < 4) {
        alert("User pequeño de lo permitido");
        error_user = true;
    }
            
    if (pass_form.value.length < 8) {
        alert("Contraseña pequeño de lo permitido ha de ser mayor a 8");
        error_user = true;
    }


    if (error_user) {
        console.log("")
    }else{
        console.log("User Right")
    }

}

pass_form.addEventListener("change", function(event) {
    let pass = document.getElementById("pass_form");
    let pass_strong_form = document.getElementById("pass_strong_form"); // Debes obtener el elemento <meter> también

    pass_strong_form.value = pass.value.length * 10;

    /* Era la manera "Antigua" que nos enseñaste
    if (pass.value.length <= 4) {
        pass_strong_form.value = 15;
    } else if (pass.value.length >= 5 && pass.value.length <= 7) {
        pass_strong_form.value = 50;
    } else {
        pass_strong_form.value = 100;
    }*/
});

pass_register.addEventListener("change", function(event) {
    let pass = document.getElementById("pass_register");
    let pass_strong_form = document.getElementById("pass_strong_register"); // Debes obtener el elemento <meter> también

    pass_strong_form.value = pass.value.length * 10;

});
register.addEventListener("click", verify)   

function verify() {
    let user = document.getElementById("name_form");
    let pass = document.getElementById("pass_register");
    let pass_confirmation = document.getElementById("Pass_confirmation");
    let birthDate = document.getElementById("birth_form");

    let errores = [];

    if (user.value.length < 3) {
        errores.push("El nombre de usuario debe tener al menos 3 caracteres.");
        user.classList.add("error");
    } else {
        user.classList.remove("error");
        user.classList.add("success");
    }

    if (pass.value.length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres.");
        pass.classList.add("error");
    } else {
        pass.classList.remove("error");
        pass.classList.add("success");
    }

    if (confirmPass.value !== pass.value) {
        errores.push("Las contraseñas no coinciden.");
        confirmPass.classList.add("error");
    } else {
        confirmPass.classList.remove("error");
        confirmPass.classList.add("success");
    }

    if (!birthDate.value) {
        errores.push("Por favor, selecciona tu fecha de nacimiento.");
        birthDate.classList.add("error");
    } 
    else {
        birthDate.classList.remove("error");
        birthDate.classList.add("success");
    }

    if (errores.length > 0) {
        alert("Errores:\n" + errores.join("\n"));
    } else {
        alert("Registro exitoso");
    }
}


