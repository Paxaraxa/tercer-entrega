

//inicio cargarUsuario
$(function(){

$("#enviar").on('click',verificarPersona);
 
 function verificarPersona(e){
        e.preventDefault();   
        
        var nombre=$('#name').val();
        var apellido=$('#apellido').val();
        var contraseña=$('#password').val();
             var emailPersona=$('#email').val();
var verificarContraseña= $('#passwordOtra').val();
var emailReg=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g;
     var boolean= emailReg.test(emailPersona);
        if (contraseña.length<8) {
            alert("contraseña tiene que ser mayor a 8 caracteres");
        }else if(contraseña!=verificarContraseña){
            alert("contraseñas no coinciden");        }
            
            
            else if($.isNumeric(nombre)==true||$.isNumeric(apellido)==true){
                alert("Nombre o apellido incorrecto");
            }else if(boolean==false){
                console.log(emailReg.test(emailPersona));
            alert("Email no valido"); }
            else   {
     
        $(function(){
    
    var endpoint_juegos = "http://localhost:3000/users";
    
    $.ajax({
        type: "GET",
        /* data : {} */
        data:{email:emailPersona},//filtra la persona por email
        url: endpoint_juegos,
        
        success: personaHacer
    });
});//cargar Juegos  
        }
     
}//cargarCategorias


 function personaHacer(funciona){
if (funciona.length>=1) { //si no se encontro nada el tamaño es menor a 1 pero si se encuentra algo el tamaño va a ser mayor
alert("Ese Email ya ah sido ingresado"); //si el email existe le alerta al usuarios
}else{ //si no existe el email se crea la perona

    var chequeado;
    var array=[];
    if ($('input[name=notificaciones]:checked').length>0){
chequeado='true';        
    }else{
        chequeado='false';
    }
            var person = { //Obtiene los datos y luegos crea a la persona
            'email':$('#email').val(),
            'name': $("#name").val(),
            'apellido':$("#apellido").val(),
            'password':$("#password").val(),
             'sexo':$('input[name=radioButton]').val(),
    'newsletter':chequeado,
             'carrito':[]

        };
console.log(person);
  var xhr = new XMLHttpRequest();
// Acá tienen que generar la URL con su endpoint y el usuario a modificar
var url = "http://localhost:3000/users";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json);
    }
};
xhr.send(JSON.stringify(person));
document.getElementById("form").reset();
}
};
});

//fin cargarUsuario
///////////////////////////
///////////////////////////
///////////////////////////
