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