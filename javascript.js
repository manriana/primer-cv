function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function edad(){ 
    document.getElementById("datos").innerHTML = "Mi edad 46 años";
  }

  function correo(){ 
    document.getElementById("datos").innerHTML = "analiamanrique@yahoo.com.ar";
  }

  function telefono(){ 
    document.getElementById("datos").innerHTML = "11 5836 4051";
  }

  function domicilio(){ 
    document.getElementById("datos").innerHTML = "Calle 20 2926, Berazategui";
  }

  function mostrarb(input) {
    var parrafo= document.getElementById("banco")
    if(input.value == "Ocultar"){
      parrafo.style.visibility= "hidden";
      input.value = "Mostrar";
    }
    else {
      parrafo.style.visibility="visible";
      input.value = "Ocultar";
    }
   }
    
   function mostrarc(input) {
    var parrafo= document.getElementById("ccentre")
    if(input.value == "Ocultar"){
      parrafo.style.visibility= "hidden";
      input.value = "Mostrar";
    }
    else {
      parrafo.style.visibility="visible";
      input.value = "Ocultar";
    }
   }

   function mostrarp(input) {
    var parrafo= document.getElementById("parisi")
    if(input.value == "Ocultar"){
      parrafo.style.visibility= "hidden";
      input.value = "Mostrar";
    }
    else {
      parrafo.style.visibility="visible";
      input.value = "Ocultar";
    }
   }



  function mensaje() {

    var nombre = document.getElementById("name").value;

    document.getElementById("prueba").innerHTML=("Hola " + nombre+ "!!! Gracias por contactarme. En breve respondere tu consulta.");
}

function valida(){
  var name = document.getElementById("nombre");
  var email = document.getElementById("email");
  var coment = document.getElementById("comentario");

  if(name.value === "" || email.value === "" || coment.value === ""){
    alert ("Complete los datos faltantes.")
  }

     if(name.value !== "" & email.value !== "" &  coment.value !== ""){
    
      alert ("Hola " + name.value + "!!! Gracias por contactarme, en breve respondere tu mensaje.");

  }
  
}