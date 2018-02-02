$("#btnBuscar").on("click",cargarVentana);
function cargarVentana(nombe){
	var usuarioIngreso=$("#barraBuscar");
	if (usuarioIngreso.val()=="carrito"){
		window.open("6del11.html");
	}else if (usuarioIngreso.val()=="menu") {
		window.open("index.html");
	}
	else if (usuarioIngreso.val()=="registro") {
		window.open("registroUsuario.html");
	}else{
        var texto=$("#barraBuscar").val();//esto es para luego cargar los datos con otra funcion
        //desde el localStorage ya que no se como pasarle de forma directa los datos
    localStorage.setItem("juegoNombre",texto);
     window.close();
    window.open("presentacionJuego.html");  
    }
}
$("#botonDesplegable").on("click",desplegarCosas);
$("#list").on("click",cerrarCosas);

function desplegarCosas(){

	 document.getElementById("list").style.width = "250px";


}

function cerrarCosas(){

	 document.getElementById("list").style.width = "0px";
	
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//presentacion de juego dinamica//////////////////////////////
//////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////





