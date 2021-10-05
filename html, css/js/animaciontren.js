/*realizado correctamente*/
var uno = document.getElementById('iniciar') ; 
 var tren = document.getElementById('tren');  
tren.value = 1;
console.log(tren.value)
function animaciontotal()
{
  tren.classList.toggle('pausa');/*en caso de que tenga esa clase lo quita, sino lo implementa*/
if (uno.innerHTML == 'Iniciar Animacion'||uno.innerHTML == 'Reanudar Animacion')
  {if (uno.innerHTML == 'Iniciar Animacion') {
    tren.classList.toggle('inicio')
    tren.classList.toggle('pausa');
  }
   uno.innerHTML = 'Pausar Animacion';
/*
   tren.style.WebkitAnimationPlayState = "running";
   tren.style.animationPlayState = 'running';*/
  } 
     
  else 
  {
  uno.innerHTML = 'Reanudar Animacion'; /*
  tren.style.WebkitAnimationPlayState = "paused";
  tren.style.animationPlayState = 'paused';*/
  }
}

/*sin terminar*/
/*
function ponervalortren(parada,cambio){
  var tren= document.getElementById("tren").value
  if (cambio=="suma") {
tren.value=tren value+parada
  }
  if(cambio=="resta") {
tren.value=tren value-parada
  }
}
function moveraparada(destino){
  var inicio = document.getElementById("nombre").value
   var tren= document.getElementById("tren").value
var cambio =""
var clase =pneranimaciontren()
unaBanda.setAttribute("class","bandas");
   ponervalortren(destino,cambio)
}
*/
function moveraparada(destino){
  let diferencia=0
  let cambio="";
  let trenecito =parseInt(tren.value);
      console.log(trenecito)
   if (trenecito<destino) {
    cambio="derecha";   
    diferencia= parseInt(destino-trenecito)
    document.getElementById('tren').value=destino
    moverderecha(trenecito,diferencia)
   }else  
   if (trenecito>destino) {
    cambio="izquierda";   
    diferencia= parseInt(trenecito-destino)
    document.getElementById('tren').value=destino
moverizquierda(trenecito,diferencia)
   }
    
    console.log(destino + cambio + diferencia)
console.log(tren
  )
 /*switch(destino)
 case "derecha1":
 case "derecha2":
 case "derecha3":
 case "izquierda1":
 case "izquierda2":
 case "izquierda3":
*/

}
function moverizquierda(destino,cantidad){
  
    //document.getElementById('tren').style.animation = "ir_izquierda 4s "+cantidad;
//tren.addEventListener("webkitAnimationStart", Animacionizq);
//tren.addEventListener("webkitAnimationEnd", alAcabarLaAnimacion);
document.getElementById('tren').animate([ 
  { right: this+'30%' }, 
  { right: this+'30%' }
], {
  duration: 1000,
  iterations: cantidad
})
}
function moverderecha(destino,cantidad){
//document.getElementById('tren').style.WebkitAnimation = "ir_derecha 4s  "+cantidad;
//tren.addEventListener("webkitAnimationStart", Animacionder);
//tren.addEventListener("webkitAnimationEnd", alAcabarLaAnimacion);
document.getElementById('tren').animate([ 
  { left: this}, 
  { left: this+'30%' }
], {
  duration: 1000,
  iterations: cantidad
})
}
/*animacion portfolio*/
/*al hacer click en algo, que implemente un atributo*/
/*
uno.addEventListener("click", function(){
   tren.setAttribute("class","pausa");
   });
tren.addEventListener("webkitAnimationStart", alEmpezarLaAnimacion, false);
tren.addEventListener("webkitAnimationIteration", alRepetirLaAnimacion, false);
tren.addEventListener("webkitAnimationEnd", alAcabarLaAnimacion);//implementar atributo//

function alEmpezarLaAnimacion(e) {
   consola.textContent = "La animaci\363n \""+ e.animationName+"\" acaba de empezar.\n";

  }
*/
//tren.addEventListener("webkitAnimationEnd", alAcabarLaAnimacion);
function alAcabarLaAnimacion(e) {
   document.getElementById('tren').removeAttribute("style")


  }
  function Animacionder(e) {
   document.getElementById('tren').style.animation = "rotarder 0.25s 1";


  }
    function Animacionizq(e) {
   document.getElementById('tren').style.animation = "rotarizq 0.25s 1";


  }