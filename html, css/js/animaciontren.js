
function animaciontotal(){
  var uno = document.getElementById('iniciar') ; 
 var el = document.getElementById('tren');    
  el.classList.toggle('pausa');
if (uno.innerHTML == 'Iniciar Animacion'||uno.innerHTML == 'Reanudar Animacion'){
 uno.innerHTML = 'Pausar Animacion';

 e1.style.WebkitAnimationPlayState = "running";
 e1.style.animationPlayState = 'running';
} 
     
  else {uno.innerHTML = 'Reanudar Animacion'; 

 e1.style.WebkitAnimationPlayState = "paused";
 e1.style.animationPlayState = 'paused';
}
}
