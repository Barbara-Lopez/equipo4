$(document).ready(function(){  //Necesario para poder refrescar las variables cada segundo
    $.ajaxSetup({cache:false});
setInterval(function(){
    actualizarVariables()
}, 1000)
})


function actualizarVariables(){ 
    $.get("../portfolio/leer_variables.html", function(result) {//genera una peticion get que retona un string
            let variables = new Array()							// de los valores mas el nombre de su variable
            datos = result.split("|")							//y los formatea de tal manera que introduce los valores
			senal_bombilla = false								//con clave-valor en un array pasa procesarlos luego
            for(i = 0; i < datos.length-1; i= i+2){				// en la funcion actualizarVisu
                variable = new Map()  					
				variable.set("nombre-variable", datos[i])
				variable.set("valor", datos[i+1])
				variables.push(variable)
            }
            actualizarVisu(variables)

    })
}


function actualizarVisu(variables){							//espera como parametro un array con un conjunto de clave-valor
    variables.forEach( variable => {						// donde la clave es el nombre de la señal y en el html utiliza el prefijo "piloto-" + nombre variable
        nombre = "piloto-" + variable.get("nombre-variable")// para identificar el piloto correspondiente al que queremos asociar la señal
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

/*
function enviarPulso(boton){
	var formulario = document.createElement("form")
	formulario.setAttribute("id", "formVirtual")
	formulario.setAttribute("method", "post")
	senal =  document.createElement("input")
	senal.setAttribute('name', boton.name)
	senal.setAttribute("type", "hidden")
	senal.setAttribute("value", 1)
	formulario.innerHTML = senal.outerHTML

    $.ajax({
        type: "POST",
        url: $('#formVirtual').attr('action'),
        data: $(formulario).serialize(),
        succes: function(){
        	senal.setAttribute("value", 0)
			formulario.innerHTML = senal.outerHTML
		    $.ajax({
		        type: "POST",
		        url: $('#formVirtual').attr('action'),
		        data: $(formulario).serialize(),
			})
        }
	})
}
*/													
function enviarPulso(boton){						//espera como parametro el propio boton que genera el evento para poder recuperar su atributo name
	var formulario = document.createElement("form") //se genera un "formulario virtual" al cual se le añade 
	formulario.setAttribute("id", "formVirtual")	// un input type hidden al que se le asigna valor 
	formulario.setAttribute("method", "post")		// y se le asigna el atributo name 
	senal =  document.createElement("input")
	senal.setAttribute('name', boton.name)
	senal.setAttribute("type", "hidden")
	senal.setAttribute("value", 1)
	formulario.innerHTML = senal.outerHTML

	$.ajax({
        type: "POST",								//se genera una peticion post para actualizar la variable en el plc
        url: $('#formVirtual').attr('action'),
        data: $(formulario).serialize(),
        succes: function(){
        	alert("funciona correctamente")
        },
        error: function(){
        	alert("error")
        },
        complete: function(){
        	alert("completado")
        }
	})
}


function enclavamientoManualAutomatico(boton){ //se espera que el parametro sea el propio boton que genera la llamada
    if(boton.id=="switch-label-manual"){
        document.getElementById('switch-label-auto').checked = false		//esta funcion simplemente asegura que el modo manual y el modo auto no entran en conflicto
    }
    if(boton.id=="switch-label-auto"){
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
tren.value=1
console.log(tren.value)
/*funcion de calcular el porcentaje*/
function porcentage(valornormal, valor100) {
return (100 * valornormal) / valor100;
} 
/*funcion de la animacion del tren automatico*/
function animaciontotal()
{
    document.getElementById('tren').removeAttribute("style")
  tren.classList.toggle('pausa');    /*en caso de que tenga esa clase lo quita, sino lo implementa*/
if (uno.innerHTML == 'Iniciar Animacion'||uno.innerHTML == 'Reanudar Animacion')
  {
    if (uno.innerHTML == 'Iniciar Animacion') 
    {
    if(tren.classList.contains("parada1") || 
        tren.classList.contains("parada2")||
        tren.classList.contains("parada3")||
        tren.classList.contains("parada4"))
    {
     tren.value=1
     tren.classList.remove("parada1", "parada2", "parada3", "parada4");
    }
    if(!tren.classList.contains('inicio'))
    {
        tren.classList.toggle('inicio');
    }
    tren.classList.toggle('pausa');
     
    if(tren.classList.contains('pausa'))
    {
        tren.classList.toggle('pausa');
    }
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
   else
    if (trenecito==destino && trenecito==1) {
        cambio="derecha";   
    diferencia=1
       moverizquierda(destino,diferencia)
    }
    uno.innerHTML = 'Iniciar Animacion';
    console.log(destino + cambio + diferencia)
    console.log(trenecito)
}


function moverizquierda(destino,cantidad)
{    
    if (tren.value==1 && destino==1 && tren.classList.contains('inicio')) {
        tren.value=2
    }
    if(!tren.classList.contains('pausa') & tren.classList.contains('inicio')){
    tren.classList.toggle('pausa');
    }
  console.log(tren.value+","+destino)
  var idniani =porcentage((30*(tren.value-1)),100)+"%"
  var finiani=porcentage((30*(tren.value-1))-(30*cantidad),100)+"%"
  var tiempo=1000*cantidad
  console.log(idniani+","+finiani)
  
        document.getElementById('tren').animate
      (
        [ 
          { left: idniani },{ left: finiani }
        ], 
        {
        duration: tiempo,
        iterations: 1
        }
      )
      .finished.then(() => { document.getElementById('tren').style.transform = 'left: finiani';  })
   
  tren.style.animationFillMode = "forwards"
  tren.style.left= finiani
  //tren.classList.remove("parada1", "parada2", "parada3", "parada4")
  //tren.classList.toggle('parada'+destino);
   }



function moverderecha(destino,cantidad)
{
    if(!tren.classList.contains('pausa') & 
        tren.classList.contains('inicio')){
    tren.classList.toggle('pausa');
    }
  console.log(tren.value+","+destino)
  var idniani=porcentage((30*(tren.value-1)),100)+"%"
  var finiani=porcentage((30*(tren.value-1))+(30*cantidad),100)+"%"
  var tiempo=1000*cantidad
  console.log(idniani+","+finiani)
  if (tren.value==1) 
  {
    document.getElementById('tren').animate
      (
        [ 
        { left: 0 }
        , 
          { left: finiani }
        ], 
        {
        duration: tiempo,
        iterations: 1
        }
      )
      .finished.then(() => { document.getElementById('tren').style.transform = 'left: finiani';  })
  }
  else
  {
        document.getElementById('tren').animate
      (
        [ 
          { left: idniani },{ left: finiani }
        ], 
        {
        duration: tiempo,
        iterations: 1
        }
      )
      .finished.then(() => { document.getElementById('tren').style.transform = 'left: finiani';  })
  }   
tren.style.animationFillMode = "forwards"

    tren.style.left= finiani
    //tren.commitStyles();
  //tren.classList.remove("parada1", "parada2", "parada3", "parada4")
  //tren.classList.toggle('parada'+destino);
}





