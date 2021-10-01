
function animaciones(){
  var uno = document.getElementById('iniciar') ; 
 var el = document.getElementById('tren');    
  el.classList.toggle('pausa');
if (uno.innerHTML == 'iniciar'){
 uno.innerHTML = 'pausar';
 e1.style.WebkitAnimationPlayState = "running";
 e1.style.animationPlayState = 'running';
} 
     
  else {uno.innerHTML = 'iniciar'; 
 e1.style.WebkitAnimationPlayState = "paused";
 e1.style.animationPlayState = 'paused';
}

}