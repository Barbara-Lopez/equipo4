 var pequeñoReso=window.matchMedia("(max-width: 315px)")
 if(pequeñoReso.matches){
        document.getElementById("titulo").style.display = "none";
    }
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