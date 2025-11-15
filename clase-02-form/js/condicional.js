

// Condicional if => Si...
let edad = 0
;

// sintaxis del if
// palabra reservada if
// paréntesis ()
// llaves {}
/* if (condition) {
  código a ejecutar si la condición es verdadera
} */

if (edad == 18) {// operarador de comparación ==
  console.log('Puedes comprar bebidas == 18 -' + edad);
}

if (edad > 18) {// operarador de orden mayor que >
  console.log('Puedes comprar bebidas > 18 - ' + edad);
}

if (edad >= 18) {// operador de orden mayor o igual que >=
  console.log('Puedes comprar bebidas >= 18 - ' + edad);
}

if (edad < 0) {// operador de orden menor que <
  console.log('Corrige el campo edad < 0 - ' + edad);
}

if (edad <= 0) {// operador de orden menor o igual que <=
  console.log('Corrige el campo edad <= 0 - ' + edad);
}


let password = 'admañlkzxdcf'; // string: cadena de texto

console.log('El password tiene ' + password.length + ' caracteres');

/* if (password.length < 12) {
  console.log('El password es muy corto, debe tener al menos 12 caracteres');
} */

if (password.length >= 12) {
  console.log('Bienvenido, tu password es seguro');
}else{
  console.log('El password es muy corto, debe tener al menos 12 caracteres');
}

console.log('===========================================================');
console.log('===========================================================');


// el if que responde a nuestro formulario
if (password.length >= 6 && password.length <= 15) {// es obligatorio que ambos datos sean verdaderos
  console.log('Bienvenido, tu password es seguro');
}else{
  console.log('ERROR: El password debe  tener entre 6 y 15 caracteres');
}



// Ejemplo de vieajes
let pasaporteVigente = true;
let pasajeComprado = true;

