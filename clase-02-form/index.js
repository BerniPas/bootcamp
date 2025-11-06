
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