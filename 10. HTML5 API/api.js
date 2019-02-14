/*
REPASO TEÓRICO DE JAVASCRIPT

1. Variables. Son contenedores para valores.
Como declarar una variable? : 
    var miVariable = valor;

Como asignar valores a una variable
    var pais = "Peru";
    
2. Tipos de datos

    String    (va entre comillas)
    Number    (para realizar calculos)
    Boolean   (true|false)

3. Condicionales
    Permiten bifurcar la ejecución de código
    Ejemplo (pseudo código)

        if(amanecio) {
            despertarme;
        } else {
            seguir durmiendo;
        }
    
    Ejemplo (código js)
        
        if(navigator) {
            console.log("Tu navegador está actualizado");
        } else {
            console.log("Tu navegador es obsoleto");
        }
*/

if(navigator) {
    console.log("Tu navegador está actualizado");
} else{
    console.log("Tu navegador es obsoleto");
}

/* 
4. Funciones
    Son porciones de código con una utilidad única.
    Ejemplo:

        function miFuncion() {
            //codigo de la función
        }
    Dentro de los parentesis pueden pasarse parametros, que son datos con los que trabaja la función.
    Ejemplo:
        
        function sumar(a,b) {
            console.log(a+b);
        }
*/

function sumar(a,b){
    console.log(a+b);
}

sumar(2,4);
sumar("2","4");
sumar("Hola","Mundo");
sumar(3,"mundo");
sumar("mundo",4);

/* 
5. Objetos
    Es una colección de datos organizados en el formato "clave: valor" y encerrado entre llaves.
    Ejemplo:

        var miObjeto = {
            clave1: valor1,
            clave2: valor2,
            clave3: valor3,
            clave4: valor4
        };
*/
var miMascota = {
    nombre: "Dino",
    tipo: "perro",
    color: "blanco",
    peso: "30kg"
};

console.log(miMascota);
console.log(miMascota.color);
console.log(miMascota.nombre);
console.log(miMascota.peso);
console.log(miMascota.tipo);

/* 
    Los objetos tienen métodos y propiedades. Las propiedades son valores (datos) que representan caracteristicas. Mientras que los metodos son funciones, que hacen algo.

    Se accede a ellos así:
        objeto.propiedad
        objeto.metodo()

    Tambien los objetos pueden tener objetos dentro.
*/

var miMascota = {
    nombre: "Dino",
    tipo: "perro",
    color: "blanco",
    peso: "30kg",
    correr: function(){
        console.log("Dino está corriendo");
    },
    comidas: {
        favorita: "pollo",
        prohibida: "pescado",
        diarias: 3,
        precio: {
            ppollo: 30,
            pcarne: 40,
            prefresco: 23
        },
        sabor: "agridulce"
    },
    edad: 23
};

console.log(miMascota);
console.log(miMascota.nombre);
console.log(miMascota.tipo);
console.log(miMascota.color);
console.log(miMascota.peso);
console.log(miMascota.correr());
console.log(miMascota.comidas.favorita);
console.log(miMascota.comidas.prohibida);
console.log(miMascota.comidas.diarias);
console.log(miMascota.comidas.precio.ppollo);
console.log(miMascota.comidas.precio.pcarne);
console.log(miMascota.comidas.precio.prefresco);
console.log(miMascota.comidas.sabor);
console.log(miMascota.edad);
console.log(miMascota.comidas);

/* 
6. Eventos
    Cualquier cosa que sucede en la aplicación. Se pueden ejecutar funciones cuando un evento ocurra.
    Para hacerlo, la sintaxis es la siguiente(pseudo codigo):

        elemento.addEventListener("evento",funcion)
    
    Ejemplo (codigo js):

    var titulo = document.getElementById("titulo");
*/

var titulo = document.getElementById("titulo");
console.log(titulo);

titulo.addEventListener("click",function(){
    console.log("Acabas de dar un clic en el título");
});

document.getElementById("titulo").addEventListener("click",function(){
    alert("Realizaste un clic en el título");
});

document.getElementById("titulo").addEventListener("click",mensaje);

function mensaje(){
    console.log("Mensaje mediante función externa");
}
/* Observación: En el caso de funciones con parametro se ejecutan automaticamente sin nesecidad del evento clic  */

// Recursos para conocer la API JS de HTML5
/* 
    Can I Use: https://caniuse.com/#index
    MDN :      https://developer.mozilla.org/es/
               https://developer.mozilla.org/en-US/docs/Web/API/Document
    w3schools: https://www.w3schools.com/
*/