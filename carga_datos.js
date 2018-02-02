$(function cargarJuegos(){

    var endpoint_juegos = "http://localhost:3000/juegos";
    
    $.ajax({
        type: "GET",
        /* data : {} */
        url: endpoint_juegos,
        success: procesar_juegos
    });
});//cargar Juegos
/////////////////////////////
/////////////////////////////
/////////////////////////////
//cargarCategorias
$(function todasCategorias(){
    
    var endpoint_categorias = "http://localhost:3000/categorias";
    
    $.ajax({
        type: "GET",
        /* data : {} */
        url: endpoint_categorias,
        success: procesarCategorias
    });
});//cargarCategorias

function procesarCategorias(datos) {
document.getElementById("categoria").options[0]=new Option('Todo')
    datos.forEach(cargarCategorias);

}
//aca se cargan las categorias
function cargarCategorias(categorias) {
    
    var comboBox = document.getElementById("categoria");

    comboBox.options[categorias.id]=new Option(categorias.nombre)    
  
    }
    function limpiarJuegos(){
    document.getElementById("juegos").innerHTML=''; //esta funcion lo que hace es limpiar el article de los juegos
    }
/////////////////////////////   
//evento click del BOTON
    function filtrar(e){//estea funcion esta sienod ejecutada en el html
var comboBox = document.getElementById("categoria");

if (comboBox.selectedIndex==0) {
    limpiarJuegos();
      var endpoint_juegos = "http://localhost:3000/juegos";
    
    $.ajax({
        type: "GET",
        /* data : {} */
        url: endpoint_juegos,
        success: procesar_juegos
    });

}
    else{
$(function(){
    
     
    var endpoint_juegos = "http://localhost:3000/juegos";
    limpiarJuegos();
    $.ajax({

        type: "GET",data:{categoriaId:comboBox.selectedIndex},//filta los juegos por ID

        /* data : {} */
        url: endpoint_juegos,
        success: procesar_juegos
    });
});        
    }

    }
    /////////////////////////////
    
//fin de cargar categorias
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
//aca se cargan los juegos



function procesar_juegos(datos) {

    datos.forEach(crear_articulo, this);

}
/* <article>
        <img>
        <h2></h2>
    </article> */

function crear_articulo(juego) {
    var $article = $("<article>");
    $article.addClass("card");
    var $imagen = $("<img>").appendTo($article);
    var $nombre = $("<h2>").appendTo($article);
    var $juegos = $("section#juegos");
    var $comprar = $("<button class='btn btn-success'>").text("comprar $"+juego.precio).appendTo($article);
    $comprar.attr("data-id",juego.id);
    $imagen.attr("src", "img/"+juego.coverimg);
    $nombre.text(juego.nombre);
    $juegos.append($article);
    $comprar.on("click",comprar);

    function comprar(e){
        console.log(JSON.parse(localStorage.getItem("usuario")));
        if(JSON.parse(localStorage.getItem("usuario"))==null){
alert('Debe iniciar sesion antes de comprar');

        }else{
 var $div = $("#precio");
        
        
        
 var $juegos = $("<h2>").appendTo($div);
 var $borrarJuego = $("<button class='btn btn-danger'>").appendTo($div);
 
 $juegos.text(juego.nombre+":"+juego.precio);
 $borrarJuego.text("Borrar");
    $borrarJuego.on("click",sacarJuego)
     
     var valoresPersona=JSON.parse(localStorage.getItem("usuario"));        
         valoresPersona[0].carrito.push(juego.id); //no anda 
        console.log(valoresPersona[0].carrito);
        localStorage.setItem("usuario",JSON.stringify(valoresPersona));
        var $precio=$("#total");
    var total=Math.round(Number($precio.html())+juego.precio); //convierte $precio a integer y le suma el precio dle juego
    console.log($precio.html());
    $precio.text(total.toString()); //luego de sumarle el precio del juego convierte de integer a string
     //lo que falta es que se actualiza
actualizarCarrito(valoresPersona[0]);
    
        }
         
    function sacarJuego(){
  total=Math.round(Number($precio.html())-juego.precio); //convierte $precio a integer y le resta el precio dle juego
$precio.text(total.toString()); //Luego actualizar la variable precio que es un h2 
var persona=valoresPersona[0];
for(var i=0;i<persona.carrito.length;i++){
    
    
    if (persona.carrito[i]==juego.id) {
        valoresPersona[0].carrito.splice(i,1);
     localStorage.setItem("usuario",JSON.stringify(valoresPersona));
     actualizarCarrito(valoresPersona[0]);   
        break;

    }
}
    
    $juegos.remove(); 
    $borrarJuego.remove();
    }
    }
    function actualizarCarrito(persona){
var xhr = new XMLHttpRequest();

// Acá tienen que generar la URL con su endpoint y el usuario a modificar
var url = "http://localhost:3000/users/"+persona.id;
xhr.open("PATCH", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json);
    }
};
xhr.send(JSON.stringify(persona));

    }
    
}

//fin de articulos
///////////////////////////
///////////////////////////
///////////////////////////
