
	  $(function(){
	  	     var valoresPersona=JSON.parse(localStorage.getItem("usuario"));    
	  	if (valoresPersona != null) {
 var $form=$("#iniciarSesionForm");
 	  		 var $txtUsuario=$("#usuario");
	  		  $form.remove();
	  		   var $txtUsuario=$("#usuario");
	  		      $txtUsuario.text(valoresPersona[0].email);
	  	}
	  	$("#btnaceptarLogin").on("click",loginUsuario);
	    function loginUsuario(e) {
	    	e.preventDefault();
	    var $email=$("#txtEmail");
	    var $pass=$("#txtPass");
var $form=$("#iniciarSesionForm");
$(function(){
    
    var endpoint_juegos = "http://localhost:3000/users";
    
    $.ajax({
        type: "GET",
        /* data : {} */
        data:{email:$email.val()},//filtra la persona por email
        url: endpoint_juegos,
        
        success: function(persona){
        	
        	if (persona.length>=1 && persona[0].password==$pass.val()) { //si existe el usuario y la contraseña esta bien tonces anda
   
               if (typeof(Storage) !== "undefined") {
   
                  localStorage.setItem("usuario",JSON.stringify(persona));
               $form.remove();
               var $txtUsuario=$("#usuario");
                 var valoresPersona=JSON.parse(localStorage.getItem("usuario"));
                 $txtUsuario.text(valoresPersona[0].email);
} else {
 alert("No te anda el cosito");
}


        	}else{//aca por si todo esta mal
alert("contraseña o usuario incorrecto");
        	}
        }
    });
});//buscarPersona
	    }
	  });
	    

	   
