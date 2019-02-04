/*
    Introducción a JavaScript

    JS es un lenguaje de programación del lado del cliente (significa que el navegador lo interpreta).

    VARIABLES

    Son contenedores para valores.

        var profesor = "Juan Perez";

    OBJETOS

    Casi todo en JS es un objeto. Los objetos tienen propiedades y métodos. Las propiedades son caracteristicas mientras que los métodos son funciones (hacen algo).
    Ejemplo: Para el objeto profesor

        profesor.edad    (propiedad)
        profesor.caminar (método)

    Sintaxis:

    Los métodos y las propiedades se escriben con punto después del objeto al que hacen referencia.

    Las propiedades pueden servir para dos fines:

        1. Obtener un valor (get - getters)
        2. Definir un valor (set - setters)

        profesor.edad = 35;                    (set)
        var edadProfesor = profesor.edad;      (get)

    Los métodos tambien pueden ser getters o setters. Su sintaxis es con paréntesis. Dentro de los paréntesis pueden pasarse valores con los cuales el método trabajará.

        profesor.caminar()                     (get)
        profesor.dormir('10pm')                (set)

    TIPOS DE DATOS 

    Existen tres tipos de datos primitivos:

    Number
        (número, se usa para cálculos matematicos)
    String
        (cadenas de texto y números, se encierran entre comillas)
    Boolean
        (valores de verdadero=true, o falso=false)
*/

    /*  Definición de una variable y asignación de un valor a la variable
        var profesor = "Juan Perez";
    */

    /*  Como mostrar Alertas por pantalla usando una variable
        alert (profesor);
    */

    /*  Como mostrar mensajes de texto y valores de variables por Consola del Navegador,   
        console.log("Mi nombre es "+profesor);
    */
    
    /*
        //Variable que almacena un String 
        var estudiante = "Carlos";
        // Variable que almacena un número entero 
        var edad = 28;
        // Variable que almacena un valor booleano 
        var casado = true;
    */

    /* Trabajando en el primer canvas */
    
    //1. Obtener el elemento canvas de HTML     
    var canvas = document.getElementById("mycanvas"); //canvas llegaria a ser un objeto y por tanto tiene metodos y propiedades
    //2. Obtener el contexto 
    var c1 = canvas.getContext("2d"); //Se trabajara con graficos 2d
    //3. Entender el sistema de coordenadas (x,y)
    //4. A dibujar

    // Lineas
        //Nesecitamos un punto inicial y uno final para dibujar una linea moveTo() para indicar el punto inicial y lineTo() para indicar el punto final de una linea.

    c1.moveTo(250,250); //Punto inicial en el centro 
    c1.lineTo(0,500); //Punto Final de la linea
    c1.lineTo(500,250); //El punto inicial del siguiente trazo llega a ser el punto final del primer trazo
    c1.lineTo(250,250);
    c1.stroke(); //Para trazar la linea 

    c1.beginPath(); //Permite definir una nueva ruta (Linea independiente de la anterior)
    c1.moveTo(0,0);
    c1.lineTo(200,200);
    c1.strokeStyle = "green"; //Propiedad que me permite colocar color de linea
    c1.lineWidth = 20; //Propiedad para definir el ancho de la linea
    c1.stroke();


    /* Trabajando en el segundo canvas */
    var canvas2 = document.getElementById("mycanvas2");
    var c2 = canvas2.getContext("2d");
    var w = canvas2.width;
    var h = canvas2.height;

    c2.moveTo(w/2,h/2);
    c2.lineTo(w*0.75,h*0.75);
    c2.lineTo(w*0.25,h*0.75);
    c2.closePath(); //Metodo que permite cerrar el punto inicial con el final
    c2.strokeStyle = "red";
    c2.lineWidth = 5; 
    c2.fillStyle = "yellow"; //Propiedad para color de Fondo
    c2.fill(); //Metodo para aplicar color de fondo
    c2.stroke();

    /* Trabajando en el Tercer canvas */
    var canvas3 = document.getElementById("mycanvas3");
    var c3 = canvas3.getContext("2d");
    /* 
        Para dibujar un rectangulo la sintaxis es la siguiente:

            canvas.rect(x,y,w,h);
            donde: x,y es el punto inicial del rectangulo
                   w es el ancho del rectangulo
                   h es la altura del rectangulo
    */
    
    c3.rect(10,10,300,100);
    c3.stroke();
    c3.beginPath();
    c3.rect(10,120,300,100);
    c3.fill();
    c3.strokeRect(10,230,300,100);
    c3.beginPath();
    c3.rect(10,340,300,100);
    c3.fillStyle = "red";
    c3.fill();
    c3.beginPath();
    c3.rect(320,10,170,100);
    c3.fillStyle = "blue";
    c3.fill();
    c3.fillRect(320,120,170,100);
    c3.beginPath();
    c3.rect(320,230,170,100);
    c3.fillStyle = "green";
    c3.fill();
    c3.beginPath();
    c3.rect(320,340,170,100);
    c3.fillStyle = "yellow";
    c3.fill();
    
    /* Trabajando en el Cuarto canvas */
    var canvas4 = document.getElementById("mycanvas4");
    var c4 = canvas4.getContext("2d");
    /* 
        Para dibujar un circulo la sintaxis es la siguiente:

            canvas.arc(x,y,r,startAngle,endAngle,rotación)
            donde: x,y es el centro del circulo
                   r es el tamaño del radio
                   starAngle es el inicio del ángulo
                   endAngle es el fin del ángulo
                   rotación por defecto es false en sentido de las agujas del reloj (angulos negativos)
    */
    var w = canvas4.width;
    var h = canvas4.height;
    var pi = Math.PI;  //Funcion Matematica que obtiene el valor de pi=3.141592653589793
    c4.arc(w/2,h/2,100,0,2*pi,true);
    c4.strokeStyle = "red";
    c4.lineWidth = 10;
    c4.fill();
    c4.stroke();

    /* Trabajando en el Quínto canvas */
    var canvas5 = document.getElementById("mycanvas5");
    var c5 = canvas5.getContext("2d");

    var w = canvas5.width;
    var h = canvas5.height;
    var c = Math.PI*2;  //Funcion Matematica que obtiene el valor de pi=3.141592653589793
    c5.arc(75,75,50,0,c*0.25);
    c5.strokeStyle = "red";
    c5.lineWidth = 10;
    c5.lineTo(75,75);
    c5.closePath();
    c5.fill();
    c5.stroke();
    c5.beginPath();
    c5.arc(300,75,50,0,c*0.50);
    c5.strokeStyle = "red";
    c5.lineWidth = 10;
    c5.lineTo(300,75);
    c5.closePath();
    c5.fill();
    c5.stroke();
    c5.beginPath();
    c5.arc(300,200,50,0,c*0.75);
    c5.strokeStyle = "red";
    c5.lineWidth = 10;
    c5.lineTo(300,200);
    c5.closePath();
    c5.fill();
    c5.stroke();

    /* Trabajando en el Séxto canvas */
    var canvas6 = document.getElementById("mycanvas6");
    var c6 = canvas6.getContext("2d");

    var w = canvas6.width;
    var h = canvas6.height;

    c6.font = "italic 30px Arial";
    c6.fillStyle = "rgb(255,0,255)";
    c6.fillText("Texto con relleno",w/2,h/2);

    c6.strokeStyle = "#00f";
    c6.font = "bold 50px Arial";
    c6.strokeText("Texto con borde",50,300);

    c6.fillStyle = "black";
    c6.lineWidth = 2;
    c6.strokeStyle = "red";
    c6.font = "bold 35px Georgia";
    c6.strokeText("Texto con borde y relleno",5,400);
    c6.fillText("Texto con borde y relleno",5,400);

    c6.fillStyle = "black";
    c6.lineWidth = 2;
    c6.strokeStyle = "rgb(10, 210, 240)";
    c6.font = "bold 30px Courier New";
    c6.strokeText("Texto con borde y relleno",5,450);
    c6.fillText("Texto con borde y relleno",5,450);