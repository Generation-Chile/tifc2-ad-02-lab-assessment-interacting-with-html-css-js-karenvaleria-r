document.getElementById("cambio").innerHTML ="Adios"
document.getElementById("rojo").style.color ="orange"

const click = document.createElement(`click`)
click.textContent= "Haz click para cambiar el color"
click.addEventListener(`click`,function(){
    this.style.color = "brown"
});
document.body.appendChild(click)
