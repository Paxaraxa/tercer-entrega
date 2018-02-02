

$(function(){

       var juegoNombre=localStorage.getItem("juegoNombre");
         console.log(juegoNombre);
    var endpoint_juegos = "http://localhost:3000/juegos";
    
    $.ajax({
        type: "GET",
        data:{nombre:juegoNombre},
        url: endpoint_juegos,
        success: presentacionJuego
    });
});	

function presentacionJuego(idJuego){


	 var $article = $("#articulo");
 var $nombre = $("#nombre").appendTo($article);
 var $img = $("#coverImg").appendTo($article);
 var $valoracion = $("#valoracion").appendTo($article);
 var $descripcion = $("#descripcion").appendTo($article);
 console.log(idJuego);

 $(function(){

    var endpoint_juegos = "http://localhost:3000/juegos";
    $.ajax({
        type: "GET",
        data:{id:idJuego[0].id},
        url: endpoint_juegos,
        success: function(juego){
       
           $nombre.text(juego[0].nombre);
           $img.attr("src", "img/"+juego[0].coverimg);
           $valoracion.text("Valoracion:"+juego[0].valoracion+" Estrellas")
           $descripcion.text(juego[0].descripcion);
        }
    });
});//cargar Juegos

}