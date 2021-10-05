$(document).ready(function(){
    $.ajaxSetup({cache:false});
setInterval(function(){
    actualizarVariables()
}, 1000)
})


function actualizarVariables(){ //retorna un array 
    $.get("../portfolio/leer_variables.html", function(result) {
			let variables = new Array()
            datos = result.split("|")
            for(i = 0; i < datos.length-1; i= i+2){
                variable = new Map()
				if(["BBERDE", "BROJAS", "BAMARILLO"].includes(datos[i])){
					variable.set("nombre-variable", "semaforo")
					switch(datos[i]){
						case "BBERDE":
							if(datos[i+1]=="1"){
								variable.set("valor", 1) // 1 para verde (ok), 2 para naranja(danger), 0 para rojo( no ok)
							}
							break
						case "BAMARILLO":
							if(datos[i+1]=="1"){
								variable.set("valor", 2) 
							}
							break
						case "BROJAS":
							if(datos[i+1]=="1"){
								variable.set("valor", 0) 
							}
							break
					}
					variables.push(variable)	
				}
				else{
					variable.set("nombre-variable", datos[i])
					variable.set("valor", datos[i+1])
					variables.push(variable)
				}
            }
			actualizarVisu(variables)

    })
}


function actualizarVisu(variables){
	variables.forEach( variable => {
        nombre = "piloto-" + variable.get("nombre-variable")
        piloto = document.getElementById(nombre.toLowerCase())
		switch(variable.get("valor")){
			case 0:
				piloto.className="status noOk"
				break
			case 1:
				piloto.className="status ok"
				break
			case 2:
				piloto.className="status danger"
		}
    })
}


/*codigo del menu de navegacion desplegable*/
function actionNav(){
    var mobileReso = window.matchMedia("(max-width: 550px)")
    var tabletReso = window.matchMedia("(max-width: 768px)")
    var desktopReso = window.matchMedia("(min-width: 768px)")
   

    if(document.getElementById("sidenav").style.display == "none"){
        if(mobileReso.matches){
            document.getElementById("sidenav").style.width = "100%";
            document.getElementById("sidenav").style.display = "inherit";
            document.getElementById("main").style.width = "100%";
        }
        else{
            document.getElementById("sidenav").style.width = "20%";
            document.getElementById("sidenav").style.display = "inherit";
            document.getElementById("main").style.width = "80%";
            document.getElementById("main").style.paddingLeft = "1em";
           
        }
    }
    else{
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
        alert("El usuario o la contaseña no es correcta") ;
}






/*envio de datos a plc INCLUIDOS CHECKBOXES A FALSE*/

function enviarDatos(){
    var $form = $('#form-controles').clone();

    //find the checkboxes
    var $checkboxes = $form.find('input[type=checkbox]');

    //loop through the checkboxes and change to hidden fields
    $checkboxes.each(function() {
        if ($(this)[0].checked) {
            $(this).attr('type', 'hidden');
            $(this).val(1);
        } else {
            $(this).attr('type', 'hidden');
            $(this).val(0);
        }
    });

    $.ajax({
        type: "POST",
        url: $("#form").attr('action'),
        data: $form.serialize()
    })
}


/* Contacto */

function enviarContacto(){
    let nombre=document.getElementById('nombre').value;
    let correo=document.getElementById('correo').value;
    let asunto=document.getElementById('asunto').value;
    let descripcion=document.getElementById('descripcion').value;
    let regNombre=new RegExp("^[A-Za-z0-9]{1,}@[A-Za-z]{0,}.[a-z]{1,3}$")
    if(nombre.length==0 || correo.length==0 || asunto.length==0 || descripcion.length==0 )
        swal("No se puede dejar ningun campo vacio", {icon: "info",})
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
