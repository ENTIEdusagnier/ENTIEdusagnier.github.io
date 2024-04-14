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
            
    if (user_login.value.length < 4) {
        alert("User pequeño de lo permitido");
        error_user = true;
    }
            
    if (pass_login.value.length < 8) {
        alert("Contraseña pequeño de lo permitido ha de ser mayor a 8");
        error_user = true;
    }


    if (error_user) {
        console.log("Wrong data")
    }else{
        console.log("Right data")
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


