/* 
    El objeto navigator contiene al objeto geolocation el cual posee tres métodos.
        1. getCurrentPosition() //Obtener posición actual
        2. watchPosition()      //Posición del reloj o posición mientrs te mueves.
        3. clearWatch()         //Limpiar reloj o detiene el watchPosition

        Vamos a usar solo el primero.

        navigator.geolocation.getCurrentPosition(exito,error)

        Requiere al menos un parámetro (el de éxito)
        
        La función exito se ejecuta si el navegador consigue obtener la localización. Y la función error en el caso contrario.
*/

console.log(navigator.geolocation);

var boton = document.getElementById("boton");

boton.addEventListener("click",obtenerPosicion); //Evento que al dar click sobre el button ejecuta la funcion obtenerPosicion()

function obtenerPosicion(){
    navigator.geolocation.getCurrentPosition(mostrarPosicion); //El metodo getCurrentPosition nesecitamos dos parametros, na funcion que se ejecute en caso de exito y otra en caso contrario
}

function mostrarPosicion(posicion){ //El parametro posicion me permite saber que obtiene la función, en este caso datos de la posicion actual.

    console.log(posicion);
    var lat = posicion.coords.latitude;
    var longi = posicion.coords.longitude;
    var elemento = document.getElementById('mapa');
    var opciones = {
        center : {
            lat: lat,
            lng: longi
        },
        zoom: 16,
        mapTypeId:'satellite'
    }
    var map = new google.maps.Map(elemento,opciones);
    var mark = new google.maps.Marker({
        position: opciones.center, 
        map: map,
        title: 'Estas aqui'
    }
    );
} 