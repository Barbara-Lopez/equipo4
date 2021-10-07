$(document).ready(function(){
    $.ajaxSetup({cache:false});
setInterval(function(){
    actualizarVariables()
}, 1000)
})


function actualizarVariables(){ //retorna un array 
    $.get("../portfolio/leer_variables.html", function(result) {
		console.log(result)
            let variables = new Array()
            datos = result.split("|")
			senal_bombilla = false
            for(i = 0; i < datos.length-1; i= i+2){
                variable = new Map()  
				variable.set("nombre-variable", datos[i])
				variable.set("valor", datos[i+1])
				variables.push(variable)
            }
            actualizarVisu(variables)

    })
}


function actualizarVisu(variables){
    variables.forEach( variable => {
        nombre = "piloto-" + variable.get("nombre-variable")
		nombre = nombre.toLowerCase()
        piloto = document.getElementById(nombre)
		if(nombre != "piloto-semaforo"){
			switch(variable.get("valor")){
				case "0":
					piloto.className="status noOk"
					break
				case "1":
					piloto.className="status ok"
					break
			}
		}
		else{
			switch(variable.get("valor")){
				case "0":
					piloto.className="status noStatus"
					break
				case "1":
					piloto.className="status ok"
					break
				case "2":
					piloto.className="status danger"
					break
				case "3":
					piloto.className="status noOk"
					break
			}
		}
    })
}

//tripleeeee
function enviarPulsos(boton){
	var formulario = document.createElement("form")
	formulario.setAttribute("id", "formVirtual")
	formulario.setAttribute("method", "post")
	senal =  document.createElement("input")
	senal.setAttribute('name', boton.name)
	senal.setAttribute("type", "hidden")
	senal.setAttribute("value", 1)
	formulario.innerHTML = senal.outerHTML
	console.log(formulario)


    $.ajax({
        type: "POST",
        url: $('#form-controles').attr('action'),
        data: $("#formVirtual").serialize()
	})
	
    
}

function enclavamientoManualAutomatico(boton){ //se espera que el parametro sea el propio boton que genera la llamada
    if(boton.id=="switch-label-manual"){
        document.getElementById('switch-label-auto').checked = false
    }
    else{
        document.getElementById('switch-label-manual').checked = false
    }
}


/*envio de datos a plc INCLUIDOS CHECKBOXES A FALSE*/

function enviarDatos(boton){
	enclavamientoManualAutomatico(boton)
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
/*animaciones del tren*/
var uno = document.getElementById('iniciar') ; 
 var tren = document.getElementById('tren');  
tren.value = 1;
console.log(tren.value)
/*funcion de calcular el porcentaje*/
function porcentage(valornormal, valor100) {
return (100 * valornormal) / valor100;
} 
/*funcion de la animacion del tren automatico*/
function animaciontotal()
{
  tren.classList.toggle('pausa');/*en caso de que tenga esa clase lo quita, sino lo implementa*/
if (uno.innerHTML == 'Iniciar Animacion'||uno.innerHTML == 'Reanudar Animacion')
  {
    if (uno.innerHTML == 'Iniciar Animacion') 
    {
    tren.classList.toggle('inicio')
    tren.classList.toggle('pausa');
    }
   uno.innerHTML = 'Pausar Animacion';
  }      
  else 
  {
  uno.innerHTML = 'Reanudar Animacion'; 
  }
}
/*funcion de la animacion del tren manual*/
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
}
function moverizquierda(destino,cantidad)
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
    duration: tiempo,
    iterations: 1
    }
  )
  tren.style.left = finiani;
}

function moverderecha(destino,cantidad)
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
    duration: tiempo,
    iterations: 1
    }
  )
  tren.style.left = finiani;
}