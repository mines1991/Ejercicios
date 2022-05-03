//Pido un nombre al usuario
//Pido al usuario que ingrese un numero
//Hola nombre de usuario te pedimos que ingreses un numero
//alerta el nombre de usuario tiene nº de caracteres
//le sumamos el numero que ingresaste el rdo es (nº de letras + nº ingresado)

let nombre = prompt ("Ingrese su nombre");

let numero = parseInt ( prompt ("Hola" + " " + nombre + " " + "por favor ingrese un numero") );


alert ("Bienvenido" + " " + nombre);

alert ("La suma de caracteres de tu nombre mas el numero ingresado es:"+" "+nombre.length + numero);
