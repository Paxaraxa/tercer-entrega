# tercer-entrega
Actualmente mi pagina web logra hacer casi todos los requisitos funcionales: Carrito(actualizar, comprar, sacar juego), registro de usuario, login y además de poder buscar el nombre del juego en el buscador para redireccionar al usuario a la pagina del mismo para ver su descripción y su calificación.
Las funcionalidades que me gustaria agregar si tuviera más tiempo más que nada es la de poder cargar todo el carrito del usuario y permitirle sacar juegos que ya selecciono en el pasado, algo que no pude hacer debido a que originalmente no estaba apreciado y tendría que modificar algunas funciones para que sean más reutilizables.
Otra funcionalidad es la que actualmente tengo un slider que va pasando y muestras algunos juegos en oferta, esto lo hice hace unos meses por lo que no sabia como utilizar javascript muy bien o no sabia todo lo que se ahora, por lo que la forma de cargar los juegos en oferta que van pasando es hecha a mano y no dinamica y trate de hacerlo dinamico pero al no pensarlo originalmente con ese proposito tendría que modificar mucho el codigo, si tuviera que hacerlo ahora lo haría de forma dinámica 
y obteniendo las imagenes del slider directamente del json.
Otra funcionalidad que no aprecie es la de un Logout que en realidad es facil de hacer es solo limpiar el localStorage.
El javascript mas complejo que tengo en la pagina sin duda es el de comprar un juego y filtrar por categoria, que lo que hago es cargar todas las categorias a un comboBox ordenadas por id de categorias, para que luego el usuario si quiere una en especifico active el evento de text change del comboBox y se haga un get a juego seleccionando todos los juegos con la id de la categoria seleccionada para luego cargarlos. Para cargar los juegos hago lo que hicimos en clase, un get de los juegos y luego un foreach para generar un boton para cada juego con las opciones de comprar juego.
Cuando un usuario compra un juego se le agrega al carrito del localstorage del usuario y se le muestra el nombre del juego que compro junto con su precio y un boton por si desea sacarlo del carrito, ademas de que se actualiza el usuario en el json y se le muestra el total de juegos que compro.
Cuando se desea sacar del carrito un juego simplemente es un for que lo reccore y saca del carrito el elemento con la id seleccionada.
Otra funcionalidad que me gustaria agregar, es que ahora en el index se pueden apreciar las categorias disponibles y si se le hace click a alguna te redirecciona a mi instagram me gustaria que te llevara a la opcion de comprar juegos pero filtrando por la categoria seleccionada.
El header de la pagina se hace de forma dinamica y en el formato de celular desaparecen todas las opciones de seleccionar categorias y login de usuario y en vez aparece un boton que si se le hace click se despliega una barra lateral con las opciones de hacer login, registrarse y comprar juego. Para cerrar este slider solo hay que hacer click en el.
En el rar hay una carpeta con  las funciones mas importantes de la pagina web separadas por el nombre del archivo y bien explicadas, para que te sea facil entender como funcionan las funciones mas complejas.


Explicación de las ventanas del programa:
Index:En el index el usuario podra 
Se le permitira al usuario ingresar a todas las ventanas del prorgama además de mostrarle un slider con imagenes pasando de los juegos en oferta, tendra la opcion de logearse o de registrarse ademas de tener un buscador con el cual se pueden acceder a diferentes ventanas, opciones del buscador:carrito(te lleva a la ventana para comprar juego), registro(te lleva al registro de usuario),nombre de un juego(se genera una vetana en forma dinamica del juego con sus caracteristicas) e inicio que te lleva a la ventana principal de la pagina.
Las categorias no andan desde el index pero si se le hace click al h2 de categorias te lleva a la ventana para comprar juegos.

Lad demás ventanas del programa son muy simples, la de registrarse le permite a un usuario registrarse validando el email, contraseña y obviamente que el email del usuario no este en la base de datos.

Y las opciones para comprar un juego son simplemenet las de comprar juego y las de sacar juego del carrito.
Para celular y tablet al no contar con un buscador y otras opciones tienen un slider con las opciones previamente mencionadas para que pueda navegar por todas las ventanas de la pagina web sin problemas.
Ya sea para celular, tablet o computadora, el usuario siempre podra volver a la ventana principal haciendo click en el h1 del header qeu dice "Paxa's Store".
