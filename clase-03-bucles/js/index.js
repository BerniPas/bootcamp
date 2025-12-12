
// Captura de datos del html - h1 con id="titulo"
let titulo = document.getElementById("titulo")
console.log(titulo);

// Modificación del contenido del html
titulo.innerText = "Listado de productos";

// Le damos un estilo al titulo
titulo.style.textAlign = "center";

/** 
 * Este es un comentario con JSDoc
 * Función para la descripción del producto ES5
 * @params nombre y user del cliente
 * @param {string} nombre - Nombre del producto
 * @param {string} user - Usuario que selecciona el producto
 * @returns no retorna ningún valor
 */

// Función para la descripción del producto ES6
const descripcion = () =>{
  // Redireccionar a otra página al user al hacer click
  window.location.href = "./pages/descripcion.html"
}















