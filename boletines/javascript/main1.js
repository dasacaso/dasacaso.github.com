// Obtener los elementos de la clase .close

let cerrar = document.querySelectorAll(".close");

// Recorrerlos

cerrar.forEach(function(close){
    // Agregar un evento click a cada uno de ellos

        close.addEventListener('click',function(evento){
            console.log("Cerrando");
            evento.preventDefault();
            //return false;

            let content = document.querySelector('.content');
            // Quitarle las clases de animacion que ya tiene
            content.classList.remove("fadeInDown");
            content.classList.remove("animated");
            // Agregar clases para animar sus salida fadeOutUp
            content.classList.add("fadeOutUp");
            content.classList.add("animated");

            setTimeout(function(){
                location.href = "/";
            },1000);
            
});
});



