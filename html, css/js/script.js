/*codigo del menu de navegacion desplegable*/
function actionNav(){
    var mobileReso = window.matchMedia("(max-width: 550px)")
    var tabletReso = window.matchMedia("(max-width: 768px)")
    var desktopReso = window.matchMedia("(min-width: 768px)")
   

    if(document.getElementById("sidenav").style.display == "none"){
        if(mobileReso.matches){
            document.getElementById("sidenav").animate([{width :"0%",display:"none"},{width :"100%",display :"inherit"}],{duration:200, iterations:1, direction:'alternate'})
            document.getElementById("sidenav").style.width = "100%";
            document.getElementById("sidenav").style.display = "inherit";
            document.getElementById("main").style.width = "100%";
        }
        else{
            document.getElementById("sidenav").animate([{width :"0%",display:"none"},{width :"20%",display :"inherit"}],{duration:200, iterations:1, direction:'alternate'})
            document.getElementById("main").animate([{width :"100%"},{width :"80%"}],{duration:200, iterations:1})
            document.getElementById("sidenav").style.width = "20%";
            document.getElementById("sidenav").style.display = "inherit";
            document.getElementById("main").style.width = "80%";
            document.getElementById("main").style.paddingLeft = "1em";
           
        }
    }
    else{
        if(document.getElementById("sidenav").style.width == "100%"){
            document.getElementById("sidenav").animate([{width :"100%",display:"inherit"},{width :"0%",display :"none"}],{duration:200, iterations:1})
        }
        else{
            document.getElementById("sidenav").animate([{width :"20%",display:"inherit"},{width :"0%",display :"none"}],{duration:200, iterations:1})
        }
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("sidenav").style.display = "none";
        document.getElementById("main").style.width = "100%";
        document.getElementById("main").style.paddingLeft = "3em";

    }
    
}

/* usuario y contraseña */


function validarUsuario() {
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
                text: "Una vez que le des a 'OK' se enviará",
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
