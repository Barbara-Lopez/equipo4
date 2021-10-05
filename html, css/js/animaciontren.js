/*realizado correctamente*/
var uno = document.getElementById('iniciar') ; 
 var tren = document.getElementById('tren');  
tren.value = 1;
console.log(tren.value)
function porcentage(valornormal, valor100) {
   return (100 * valornormal) / valor100;
} 
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
        moverderecha(destino,diferencia)
    document.getElementById('tren').value=destino

   }else  
   if (trenecito>destino) {
    cambio="izquierda";   
    diferencia= parseInt(trenecito-destino)
    moverizquierda(destino,diferencia)
    document.getElementById('tren').value=destino
   }
    
    console.log(destino + cambio + diferencia)
//console.log(tren )
 /*switch(destino)
 case "derecha1":
 case "derecha2":
 case "derecha3":
 case "izquierda1":
 case "izquierda2":
 case "izquierda3":
*/
}
/*
function moverizquierda(destino,cantidad){
  
    //document.getElementById('tren').style.animation = "ir_izquierda 4s "+cantidad;
//tren.addEventListener("webkitAnimationStart", Animacionizq);
//tren.addEventListener("webkitAnimationEnd", alAcabarLaAnimacion);
console.log(tren.value+","+destino)
console.log(tren.style.left)
for (var i = tren.value; i > destino; i--) {
var idniani =porcentage((30*(i-1)),100)+"%"
var finiani=porcentage((30*(i-1))-30,100)+"%"
console.log(idniani+","+finiani)
tren.animate([ 
  { left: tren.style.left }, 
  { left: porcentage((30*(i-1))-30,100)+"%" }
], {
  duration: 1000,
  iterations: 1
})
tren.style.left = porcentage((30*(i-1))-30,100)+"%";
console.log(tren.style.left)
}
}
function moverderecha(destino,cantidad){
      //document.getElementById('tren').style.WebkitAnimation = "ir_derecha 4s  "+cantidad;
      //tren.addEventListener("webkitAnimationStart", Animacionder);
      //tren.addEventListener("webkitAnimationEnd", alAcabarLaAnimacion);
      console.log(tren.style.left)
      for (var i = tren.value; i < destino; i++) {
        console.log(i)
        //console.log(idniani+","+finiani)
        var idniani =porcentage((30*(i-1)),100)+"%"
        var finiani=porcentage((30*(i-1))+30,100)+"%"
        console.log(idniani+","+finiani)
        tren.animate([ 
          { left: idniani }, 
          { left: finiani }
        ], {
          duration: 1000,
          iterations: 1
        })
        tren.style.left = porcentage((30*(i-1))+30,100)+"%";
        console.log(tren)
        console.log(tren.style.left)
  }
}*/
//animacion correcta v1 (de un lado a otro directamente)
          function moverizquierda(destino,cantidad){
            
          //document.getElementById('tren').style.animation = "ir_izquierda 4s "+cantidad;
          //tren.addEventListener("webkitAnimationStart", Animacionizq);
          //tren.addEventListener("webkitAnimationEnd", alAcabarLaAnimacion);
          console.log(tren.value+","+destino)
          var idniani =porcentage((30*(tren.value-1)),100)+"%"
          var finiani=porcentage((30*(tren.value-1))-(30*cantidad),100)+"%"
          var tiempo=1000*cantidad
          console.log(idniani+","+finiani)
          document.getElementById('tren').animate([ 
            { left: idniani }, 
            { left: finiani }
          ], {
            duration: tiempo,
            iterations: 1
          })
          tren.style.left = finiani;
          }
          function moverderecha(destino,cantidad){
          //document.getElementById('tren').style.WebkitAnimation = "ir_derecha 4s  "+cantidad;
          //tren.addEventListener("webkitAnimationStart", Animacionder);
          //tren.addEventListener("webkitAnimationEnd", alAcabarLaAnimacion);
          console.log(tren.value+","+destino)
          var idniani=porcentage((30*(tren.value-1)),100)+"%"
          var finiani=porcentage((30*(tren.value-1))+(30*cantidad),100)+"%"
            var tiempo=1000*cantidad
          console.log(idniani+","+finiani)

          document.getElementById('tren').animate([ 
            { left: idniani }, 
            { left: finiani }
          ], {
           
            duration: tiempo,
            direction: 'alternate',
            iterations: 1,
          })
          tren.style.left = finiani;

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
tren.addEventListener("webkitAnimationEnd", alAcabarLaAnimacion);
function alAcabarLaAnimacion(e) {
   tren.style.WebkitAnimationPlayState = "running";


  }
  function Animacionder(e) {
   tren.style.left = finiani;


  }
    function Animacionizq(e) {
   tren.style.left = finiani;

  }
tren.addEventListener("AnimationStart", alEmpezarLaAnimacion, false);
tren.addEventListener("AnimationIteration", alRepetirLaAnimacion, false);
function alEmpezarLaAnimacion(e){
      console.log("La animaci\363n "+ e.animationName+" acaba de empezar");
}
function alRepetirLaAnimacion(e) {
   console.logt ( "La animaci\363n \""+ e.animationName+"\" vuelve a repetirse. Han pasado "+ Number((e.elapsedTime).toFixed(1)) +" segundos.\n");
  }