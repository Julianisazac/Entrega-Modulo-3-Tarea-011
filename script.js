
function CalcularPropina(){

var totalCompra = document.getElementById("caja1").value;
var porcentajePropina = document.getElementById("caja2").value;
var totalDePersonas = document.getElementById("caja3").value;

const porcentaje= porcentajePropina/100;
var resultado1= totalCompra * porcentaje;
var resultado2= totalCompra + resultado1;

if (totalCompra == ""){
   document.getElementById('resultado3').innerHTML = " ";
   document.getElementById('resultado1').innerHTML = alert("Poner todos los campos");
   document.getElementById('resultado2').innerHTML = alert("Poner todos los campos"); } else{
   document.getElementById('resultado1').innerHTML =  resultado1 .toFixed(2);
   document.getElementById('resultado2').innerHTML = resultado2.toFixed(2);
}
 }

 function ResetFormulario(){
     document.getElementsByClassName("contenedor2").onclick
 }