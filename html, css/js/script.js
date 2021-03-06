/*codigo del menu de navegacion desplegable*/
/*animacion despliegue*/
var Navegador =document.querySelector('#boton-menu')
var botoncito=document.getElementById("sidenav")
   console.log(botoncito)
   /*evento de la animacion de la barra del navegador al hacer click*/
Navegador.addEventListener('click',() =>
{
    let mobileReso = window.matchMedia("(max-width: 550px)")
    let tabletReso = window.matchMedia("(max-width: 768px)")
    let desktopReso = window.matchMedia("(min-width: 768px)")

    console.log(botoncito.style.display)
    if(!botoncito.style.display)
    botoncito.style.display ="none"
    console.log(botoncito.style.display)

    if(botoncito.style.display == "none" || botoncito.style.overflow=="hidden")
    {
        if(mobileReso.matches)
            /*despliegue total de la barra*/
        {

            document.getElementById("sidenav").animate
            ([{width : "0%" , display: "none"},{width : "100%" , display : "inherit"}],
               {duration: 200 , iterations:1, easing: "ease-in", fill: "forwards"})
            botoncito.style.overflow="visible";
            document.getElementById("sidenav").style.width = "100%";
            document.getElementById("sidenav").style.display = "inherit";
              console.log("grando "+document.getElementById("sidenav"))
        }
        else
            /*despliegue parcial de la barra*/
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
    else 
    {
        if(document.getElementById("sidenav").style.width == "100%")
            /*despliegue total de la barra*/
        {
            
             document.getElementById("sidenav").animate
                (
                [{width : "100%" , display : "inherit"},{width : "0%" , display: "none"}],
                {duration: 200 , iterations:1 , easing: "ease-in", fill: "forwards"}
                )
             botoncito.style.width = "0";
             botoncito.style.overflow="hidden";
        }
        else
            /*despliegue parcial de la barra*/
        {
            document.getElementById("sidenav").animate
                (
                [{width : "20%",display : "inherit" },{width :"0%"  , display: "none"}],
                {duration: 200 , iterations:1, easing: "ease-in", fill: "forwards" }
                )
            document.getElementById("main").animate
                (
                [{width :"80%"},{width :"100%"}],
                {duration:200, iterations:1, easing: "ease-in", fill: "forwards" }
                )
            
            botoncito.style.width = "0";
            botoncito.style.overflow="hidden";
            document.getElementById("main").style.width = "100%";
            document.getElementById("main").style.paddingLeft = "3em";
      
         }
    } 
}
, false)



/* usuario y contrase??a */


function validarUsuario() {
    let nombre=document. getElementById ("user").value;
    regNombre=new RegExp("^admin$") 
    let passwd=document. getElementById ('passwd').value;
    regPasswd=new RegExp("^12345$")
    if (regNombre.test(nombre) && regPasswd.test(passwd)) 
    {
       window.location="gestion.html";
       window.sessionStorage.setItem("user", "admin")
    }
    else 
        swal("Usuario o contrase??a no validos", {icon: "error",})
}




function autenticar(){
    if (window.sessionStorage.getItem("user")=="admin") {
        return true
    }
    else
      //throw new Error('Tu Browser no soporta sessionStorage!');
      return false
    }






/* Contacto */

function enviarContacto(){
    let nombre=document.getElementById('nombre').value;
    let correo=document.getElementById('correo').value;
    let asunto=document.getElementById('asunto').value;
    let descripcion=document.getElementById('descripcion').value;
    let regNombre=new RegExp("^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$")
    console.log(nombre.length)
    if(nombre.length==0 || correo.length==0 || asunto.length==0 || descripcion.length==0 ){
        swal("No se puede dejar ningun campo vacio", {icon: "info",})
    }
    else{
        
        if (!regNombre.test(correo)){
            swal("El apartado de correo electronico no tiene la estructura de un correo", {icon: "info",})
        }
        else{
            swal({
                title: "Estas seguro?",
                text: "Una vez que le des a 'OK' se enviar??",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                swal("Se ha enviado correctamente", {
                    icon: "success",
                });
                } 
            });
        }
    }
 }
