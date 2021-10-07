/*variables globales*/


var controlauto = document.getElementById('iniciar') ;  //variable global delboton de la animacion automatica
var tren = document.getElementById('tren');  //variable global de la imagen del tren de la animacion
    tren.value = 1;
console.log(tren.value)
var botondesplegable =document.querySelector('#boton-menu')
var botoncito=document.getElementById("sidenav")
   /*evento al hacer click hace dicha funcion*/


botondesplegable.addEventListener('click',() =>
{
    var mobileReso = window.matchMedia("(max-width: 550px)")
    var tabletReso = window.matchMedia("(max-width: 768px)")
    var desktopReso = window.matchMedia("(min-width: 768px)")
    console.log(botoncito.style.display)
    if(!botoncito.style.display)
    botoncito.style.display ="none"
    console.log(botoncito.style.display)


    if(botoncito.style.display == "none" || botoncito.style.overflow=="hidden")
    {
        if(mobileReso.matches)
        {

          botoncito.animate([{width : "0%" , display: "none"},{width : "100%" , display : "inherit"}],{duration: 200 , iterations:1, easing: "ease-in", fill: "forwards"})
          botoncito.style.overflow="visible";
          console.log("grando "+document.getElementById("sidenav"))
        }
        else
        {
          document.getElementById("main").animate
                (
                [{width :"100%"},{width :"80%"}],
                {duration:200, iterations:1, easing: "ease-in", fill: "forwards" }
                )
          document.getElementById("sidenav").animate
                (
                [{width :"0%"  , display: "none"},{width : "20%",display : "inherit" }],
                {duration: 200 , iterations:1, easing: "ease-in", fill: "forwards" }
                )
          botoncito.style.overflow="visible";
          document.getElementById("sidenav").style.width = "20%";
          document.getElementById("sidenav").style.display = "inherit";
          document.getElementById("main").style.width = "80%";
          document.getElementById("main").style.paddingLeft = "1em";
          console.log("mini "+ botoncito.style)
        }
    }
    else //animacion de vuelta al modo original
    {
        if(botoncito.width == "100%")
        {
         botoncito.animate([{width : "100%" , display : "inherit"},{width : "0%" , display: "none"}],{duration: 200 , iterations:1 , easing: "ease-in", fill: "forwards"})
         botoncito.style.width = "0";
         botoncito.style.display = "none";
         document.getElementById("main").animate
            (
            [{width :"80%"},{width :"100%"}],
            {duration:200, iterations:1, easing: "ease-in", fill: "forwards" }
            )
            botoncito.style.overflow="hidden";
        document.getElementById("main").style.width = "100%";
        document.getElementById("main").style.paddingLeft = "3em";
            
        }
        else
        {
          document.getElementById("main").animate
            (
            [{width :"80%"},{width :"100%"}],
            {duration:200, iterations:1, easing: "ease-in", fill: "forwards" }
            )        
          botoncito.animate([{width : "20%" , display : "inherit"},{width : "0%"}],{duration: 200 , iterations:1, easing: "ease-in", fill: "forwards"})
          botoncito.style.width = "0";
          botoncito.style.overflow="hidden";
          document.getElementById("main").style.width = "100%";
          document.getElementById("main").style.paddingLeft = "3em";
        }
    } 
}
, false)


/*funcion de calcular el porcentaje*/

function porcentage(valornormal, valor100) {
return (100 * valornormal) / valor100;
} 


/*funcion de la animacion del tren automatico*/


function animaciontotal()
{
  if(tren.value != 1){
  moveraparada(1)
  tren.value = 1
  controlauto.innerHTML =  'Iniciar Animacion';
  }
  else
  {
    tren.classList.toggle('pausa');/*en caso de que tenga esa clase lo quita, sino lo implementa*/
  if (controlauto.innerHTML == 'Iniciar Animacion'||controlauto.innerHTML == 'Reanudar Animacion')
    {
      if (controlauto.innerHTML == 'Iniciar Animacion') 
      {
      tren.classList.toggle('inicio')
      tren.classList.toggle('pausa');
      }
     controlauto.innerHTML = 'Pausar Animacion';
    }      
    else 
    {
    controlauto.innerHTML = 'Reanudar Animacion'; 
    }
  }
}


/*funcion de la animacion del tren manual*/


function moveraparada(destino)
{
  if (controlauto.innerHTML ==  'Iniciar Animacion') {
  let diferencia=0//variable para calcular la cantidad de paradas a mover
  let cambio="";//variable para controlar si se va a la derecha o izquierda
  let trenecito =parseInt(tren.value);
      console.log(trenecito)
   if (trenecito<destino) 
   {
      cambio="derecha";   
      diferencia= parseInt(destino-trenecito)
      moverderecha(destino,diferencia)/*se va a la funcion de mover a la derecha*/
      document.getElementById('tren').value=destino

   }else  
   if (trenecito>destino) 
   {
      cambio="izquierda";   
      diferencia= parseInt(trenecito-destino)
      moverizquierda(destino,diferencia)/*se va a la funcion de mover a la izquierda*/
      document.getElementById('tren').value=destino
   }
    console.log(destino + cambio + diferencia)
    controlauto.innerHTML = 'Reponer Inicio';
  }
}



//animacion manual (de un lado a otro directamente) 


function moverizquierda(destino,cantidad)  //animacion direccion izquierda
{    
  console.log(tren.value+","+destino)
  var idniani =porcentage((30*(tren.value-1)),100)+"%"
  var finiani=porcentage((30*(tren.value-1))-(30*cantidad),100)+"%"
  var tiempo=1000*cantidad 
  console.log(idniani+","+finiani)
  document.getElementById('tren').animate
  (
    [ 
      { left: idniani }, 
      { left: finiani }
    ], 
    {
    duration: tiempo,//el tiempo esta considerado en mlisegundos
    iterations: 1
    }
  )
  tren.style.left = finiani;
}

function moverderecha(destino,cantidad) //animacion direccion izquierda
{
  console.log(tren.value+","+destino)
  var idniani=porcentage((30*(tren.value-1)),100)+"%"
  var finiani=porcentage((30*(tren.value-1))+(30*cantidad),100)+"%"
  var tiempo=1000*cantidad
  console.log(idniani+","+finiani)
  document.getElementById('tren').animate
(
    [ 
      { left: idniani }, 
      { left: finiani }
    ], 
    {
    duration: tiempo,//el tiempo esta considerado en mlisegundos
    iterations: 1
    }
  )
  tren.style.left = finiani;
}


/* funciones de usuario y contraseña */


function validarUsuario() 
{
    let nombre=document. getElementById ("user").value;
        regNombre=new RegExp("^admin$") 
    let passwd=document. getElementById ('passwd').value;
        regPasswd=new RegExp("^12345$")
    if (regNombre.test(nombre) && regPasswd.test(passwd)) 
    {
       window.location="gestion.html";
    }
    else 
        swal("Usuario o contraseña no validos", {icon: "error",})
}


/* funciones Contacto */


function enviarContacto()
{
    let nombre=document.getElementById('nombre').value;
    let correo=document.getElementById('correo').value;
    let asunto=document.getElementById('asunto').value;
    let descripcion=document.getElementById('descripcion').value;
    let regNombre=new RegExp("^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$")
    console.log(nombre.length)
    if(nombre.length==0 || correo.length==0 || asunto.length==0 || descripcion.length==0 )
    {
        swal("No se puede dejar ningun campo vacio", {icon: "info",})
    }
    else
    {
        if (!regNombre.test(correo))
        {
            swal("El apartado de correo electronico no tiene la estructura de un correo", {icon: "info",})
        }
        else
        {
            swal({
                title: "Estas seguro?",
                text: "Una vez que le des a 'OK' se enviará",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => 
            {
                if (willDelete) 
                {
                swal("Se ha enviado correctamente",{ 
                  icon: "success",
                  });
                } 
            });
        }
    }
}


/* borrador 1 (de un lado a otro parandose en cada parada)*/
/*
function moverizquierda(destino,cantidad){
  
    //document.getElementById('tren').style.animation = "ir_izquierda 4s "+cantidad;
//tren.addEventListener("webkitAnimationStart", Animacionizq);
//tren.addEventListener("webkitAnimationEnd", alAcabarLaAnimacion);
console.log(document.getElementById('tren').value+","+destino)
console.log(document.getElementById('tren').style.left)
for (var i = document.getElementById('tren').value; i > destino; i--) {
var idniani =(30*(i-1)) +"%"
var finiani=(30*(i-1))-30+"%"
console.log(idniani+","+finiani)
document.getElementById('tren').animate([ 
  { left: tren.style.left }, 
  { left: porcentage((30*(i-1))-30,100)+"%" }
], {
  delay:1000,
  duration: 1000,
  iterations: 1
})
document.getElementById('tren').style.left = finiani;
        tren.style.value=i;
//document.getElementById('tren').style.left = porcentage((30*(i-1))-30,100)+"%";
console.log(document.getElementById('tren'))
console.log(document.getElementById('tren').style.left)
console.log(document.getElementById('tren').style.value)
}
}
function moverderecha(destino,cantidad){
      //document.getElementById('tren').style.WebkitAnimation = "ir_derecha 4s  "+cantidad;
      //tren.addEventListener("webkitAnimationStart", Animacionder);
      //tren.addEventListener("webkitAnimationEnd", alAcabarLaAnimacion);
      console.log(document.getElementById('tren').style.left)
      var idniani,finiani;
      for (var i = document.getElementById('tren').value; i < destino; i++) {
        console.log(i)
        //console.log(idniani+","+finiani)
         idniani =porcentage((30*(i-1)),100)+"%"
         finiani=porcentage((30*(i-1))+30,100)+"%"
        console.log(idniani+","+finiani)
        document.getElementById('tren').animate([ 
          { left: idniani }, 
          { left: finiani }
        ], {
          delay:1000,
          duration: 1000,
          iterations: 1
        })
        document.getElementById('tren').style.left.value = finiani;
        document.getElementById('tren').style.value=i;
        console.log(document.getElementById('tren'))
        console.log(document.getElementById('tren').style.left)
        console.log(document.getElementById('tren').style.value)
  }
}
*/