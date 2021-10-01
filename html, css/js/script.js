/*
     var pequeñoReso=window.matchMedia("(max-width: 315px)");
     if(pequeñoReso.matches){
        document.getElementById("titulo").style.display = "none";
    }
*/
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
    regNombre=new RegExp("^[A-Z]{1}[A-Za-z]{0,}$")
    if (regNombre.test(nombre)) 
    {
        validarContraseña();
    }
    else 
        alert("El usuario o la contaseña no es correcta") ;
}

function validarContraseña() {
    let passwd=document. getElementById ('passwd').value;
    regPasswd=new RegExp("^[0-9]{1,}$")
    if (regPasswd.test(passwd)) 
    {
        window.location="../index.html";

    }
    else 
       alert("El usuario o la contaseña no es correcta");
      
}

/*serialize mejorado para checkboxes sin marcar */
$ji.fn.extend({
    serializeArray: function () {
        //Important: Get the results as you normally would...
        var results = _serializeArray.call(this);

        //Now, find all the checkboxes and append their "checked" state to the results.
        this.find('input[type=checkbox]').each(function (id, item) {
            var $item = $ji(item);
            var item_value = $item.is(":checked") ? 1 : 0;
            var item_name = $item.attr('name');
            var result_index = null;
            results.each(function (data, index) {
                if (data.name == item_name) {
                    result_index = index;
                }
            });

            if (result_index != null) {
                // FOUND replace previous value
                results[result_index].value = item_value;
            }
            else {
                // NO value has been found add new one
                results.Push({name: item_name, value: item_value});
            }
        });
        return results;
    }
});




/*envio de datos a plc*/

function enviarDatos(){
    $.ajax({
        type: "POST",
        url: $("#form-controles").attr('action'),
        data: $("#form-controles").serialize()
    })
}
