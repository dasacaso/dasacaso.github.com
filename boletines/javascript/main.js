console.log("Saludos mundo soy David");

// DOM
// querySelector  /  querySelectorAll
/*/
let container = document.querySelector(".container");
let links = document.querySelectorAll("a");
links.forEach(function(link){
    console.log(link);
});

console.log(container); */

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })
});

let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
    icono.classList.add(<i class="fa fa-star-half-o" aria-hidden="true"></i>)
});