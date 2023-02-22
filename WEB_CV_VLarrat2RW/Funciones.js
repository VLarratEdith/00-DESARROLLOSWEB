
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("Fecha_Actual").innerHTML = "Fecha última actualización: "+ month + "/" + day + "/" + year;

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});





//button.addEventListener("click", window.print());


//button.addEventListener("click", window.print());





//document.getElementById ('Boton').onmouseover = +window.print ();








//function imprimir() {
//	window.print();
//}
   


//function imprimir() //


//
//{
 //   ("Lo logre por fin");


//document.getElementById("Demo").innerHTML = "Por fin salio esto carajo";
//}
// 
//<button onclick="window.print()">Imprimir pantalla con otro ejemplo</button>