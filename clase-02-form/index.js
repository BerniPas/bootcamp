
//esto es un comentario de una sola línea
var nombre; //declaración de variable

nombre = "Juan"; //asignación de valor

nombre = 123; //reasignación de valor con diferente tipo de dato

nombre = "Pedro"; //reasignación de valor


var edad = 30; //declaración y asignación en una sola línea

// Imprimir en consola el dato almacenado en las variables
console.log(nombre);
console.log(edad);

// Tipos de datos
// String (cadena de texto, letra, palabra, frase, entre comillas)
// Js es flexible con las comillas: simples, dobles o backticks
var ciudad = "Buenos Aires"
var pais = 'Argentina';
var continente = `América del Sur`
var dni = '123456789';

console.log(ciudad, pais, continente);
console.log(dni);

// Tipo de dato Number (números, enteros, decimales, van sin comillas)
var numeroEntero = 100;
var numeroDecimal = 99.99;

console.log(numeroEntero, numeroDecimal);


// Tipo de dato Boolean (booleano, true o false)
var soltero = true; //verdadero
var tieneMascota = false; //falso

console.log(soltero, tieneMascota);


// Declarara y asigna varias variables en una sola línea
var marcaAuto = "Toyota", modeloAuto = "Corolla", anioAuto = 2020;

// Declara varias variables sin asignarles valor
var fruta, color, sabor; 

console.log(fruta); //undefined porque no tiene valor asignado aún

//prompt() // node no ejecuta comandos del front

// Crear variables con la siguiente sintaxis
var localidad; // minuscula
var CUENTA_BANCARIA; //snake case (mayúsculas y guiones bajos)
var paisDeOrigen; //camel case
var $Estado; //con signo de dólar
var _codigoPostal; //con guion bajo

//var 1erNombre; //incorrecto, no puede comenzar con número
//var nombre completo; //incorrecto, no puede tener espacios
//var var; //incorrecto, "var" es una palabra reservada
//var if; //incorrecto, "if" es una palabra reservada

console.log(soltero, tieneMascota);

// Constantes: son variables cuyo valor no puede cambiar
// Cuando se declara una constante, se debe asignar un valor inmediatamente
const IVA = 0.21; //declaración y asignación de constante
const Brasil = "País limitrofe de Argentina";

// Unimos las vaariables con texto para imprimir en consola
console.log("El valor del IVA es: " + IVA); //concatenación de texto
console.log("Un país limitrofe de Argentina es: " + Brasil);


// Sumas
let numeroUno = 10;
let numeroDos = 20;
let suma;

suma = numeroUno + numeroDos; //operador matemático de suma

console.log("La suma de " + numeroUno + " + " + numeroDos + " es igual a: " + suma);

console.log(
  "Texto plano que quiero mostrar: " 
  + 
  Brasil
  +
  " tiene una relación comercial con "
  + 
  pais
  +
  "."
);

console.log(
  Brasil + ' , ' + 
  'no es campeon del mundo'
);

numeroDos = 50; //reasignación de valor

console.log(numeroDos);

//IVA = 0.10; //error: no se puede reasignar una constante
//final int DNI = 12315644

