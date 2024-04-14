let num_random = Math.floor(Math.random()*100) + 1;
let adivina = document.getElementById("adivina");
let contadorIntentos = 0;
let contador = document.getElementById("contador");
    
    adivina.addEventListener("click", function(event) {
        console.log("click!");
        contadorIntentos++;
        contador.innerHTML = "Numero de intentos: " + contadorIntentos;
                    
        const numero = document.getElementById("numero").value;
                        
        let mensaje = document.getElementById("mensaje");
                        
        if (numero === ""){
            console.log("Tienes que poner un numero");
            mensaje.innerHTML = "Has de introducir un numero!";
            return;
        }
        else if (num_random < numero) {
            console.log("El numero es demasiado grande");
            mensaje.innerHTML = "El numero es demasiado grande";
            return;
        } 
        else if (num_random > numero) {
            console.log("El numero es demasiado pequeño");
            mensaje.innerHTML = "El numero es demasiado pequeño";
            return;
        } 
        else {
            console.log("HAS ACERTADO!");
            mensaje.innerHTML = "HAS ACERTADO!";
            return;
        }
    });
    
    setTimeout(function (){
        console.log("Hola");
        
    }, 2000);
    
    let time = 60;
    
    interval = setInterval(function (){
        let countdown = document.getElementById("countdown");
        
        time--;
        
        countdown.value = time;
        
        if (time == 0){
            mensaje.innerHTML = "¡Se acabado el timepo!";
            
            clearInterval(interval);
            
        }
        
        console.log(time);
        
    }, 1000);