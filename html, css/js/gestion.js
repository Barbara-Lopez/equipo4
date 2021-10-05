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