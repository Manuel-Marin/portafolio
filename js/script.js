
function mostrar(){
   
    
    //document.getElementById('mostrar_ocultar').style.display ='inline';
    document.getElementById('mostrar_ocultar').style.width ='260px';
    
    
}
function ocultar(){
    
    //document.getElementById('mostrar_ocultar').style.display ='none';
    document.getElementById('mostrar_ocultar').style.width ='370px';
   
}

function mostrar_ocultar(){
   
    document.getElementById('mostrar_ocultar').classList.toggle('active');
    //if(check.checked == false){
       // mostrar()
        
    //}else{
     //   ocultar()
       
   // }
}