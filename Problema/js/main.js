var numeroAlAzar = 0;
var puntos = 0;
var intentos = 0;

var imagenes = [
 "Ana.jpg", "Analy.jpg", 
 "Areli.jpg", "Beatriz.jpg", 
 "Cecilia.jpg", "Claudia.jpg", 
 "Daniela.jpg", "Elisa.jpg", 
 "Evelyn.jpg", "Gabriela.jpg", 
 "Grissel.jpg", "Guadalupe.jpg", 
 "Johana.jpg", "Joyce.jpg", 
 "Ofelia.jpg", "Patricia.jpg", 
 "Sharon.jpg", "Heredia.jpg", 
 "Karen.jpg", "Monica.jpg",  
 "Karla.jpg", "Leslie.jpg", 
 "Mishel.jpg", "Milca.jpg", 
 "Tayde.jpg", "Naibit.jpg", 
 "Nayeli.jpg", "Nelly.jpg", 
 "Reyna.jpg", "Adriana.jpg", 
 "RuthLopez.jpg","RuthVega.jpg",
 "SandraBollo.jpg","SandraDiaz.jpg", 
 "Vianey.jpg", "Zazil.jpg"];

var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adri", 
 "Dj Ruth", "Ruth", 
 "Sandia", "San", 
 "Vian", "Zaz"];

//SEDE LIMA O MEXICO
  // $('#peru').click(function(){
  //   $('#imagenPersona').hide();
  // });

  // $('#mexico').click(function(){
  //   $('#imagenPersona').show();
  // });


function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};


function desplegarNuevaJugada(){
  var tamanoArreglo = nombres.length;

  if (tamanoArreglo > 0) {
    numeroAlAzar = enteroRandomEnRango(0, tamanoArreglo);

    var imagen = 'fotos/' + imagenes[numeroAlAzar];
    $('#imagenPersona').attr('src', imagen);
  } else {
    alert('Obtuviste ' + puntos + ' puntos')
  };
};



$(document).ready(function(){



  //COMPROBAR QUE SEA CORRECTA LA IMG CON EL INPUT
  $('#btnComprobar').click(function(){
    var nombre = $('#inputNombre').val();
    console.log('El usuario escribio: ' + nombre);

    var nombreAdivinar = nombres[numeroAlAzar]
    console.log('El nombre correcto es: ' + nombreAdivinar);

    if (nombre === nombreAdivinar){

      //QUITAR ELEMENTOS QUE YA NO VAMOS A QUEREMOS O QUE YA NO SE REPITA
      nombres.splice(numeroAlAzar, 1);
      imagenes.splice(numeroAlAzar,1);
      puntos = puntos + 5;
      alert('Correcto!')
      desplegarNuevaJugada();
    } else {
        puntos--;
        alert('Sigue intentando!');   
    };
    //MOSTRAR PUNTOS
    $('#score').text('Puntos: ' + puntos);
  });

  desplegarNuevaJugada();

});


/*$(document).ready(function() {
  console.log("El docummento ya esta listo");
  

   //CAMBIAR ATRIBUTO
  $("#imagenPersona").attr("src", )

  

  $("#inputNombre").val();
  //DECIRLE QUE EJECUTE CUANDO SE HAGA CLICK
  $("#btnComprobar").click(function(){
    
    //HACER ESTO CUANDO HAGA CLICK
    

    //OBTENER EL VALOR DE INPUT
    var nombre = $("#inputNombre").val();
    console.log(nombre);
    
  });

 }); */



//IMAGENES RANDOM
/*var misimagenes=["imagen1.png","imagen2.png","imagen3.png","imagen4.png","imagen5.png"]; 
 
for (i=0;i< imagenes.length;i++){
      var rango_superior = 1;
      var rango_inferior = 34;
      var aleatorio = Math.floor(Math.random()*(rango_superior-(rango_inferior-1))) + rango_inferior;
   
      document.write("<img src="+imagenes[aleatorio]+">")      
  }


var fotoCompañeras = function(){
    for (var i = 0; i < imagenes.length; i++) {
      var aleatorio = Math.floor(Math.random()*(imagenes.length));
      seleccion = imagenes[aleatorio];
      trace(seleccion);
      imagenes.splice(aleatorio,1);
      console.log(aleatorio);
    }
  }; */