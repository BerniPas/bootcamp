
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


let searchForm = document.getElementById("searchForm");
let searchInput; // Capturamos el valor del input de búsqueda

searchForm.addEventListener("submit", function(event) {
  event.preventDefault(); // para que no se recargue la página

  searchInput = document.getElementById("search").value; 
  searchInput = searchInput.toLowerCase();
  // Lista de Productos
  const productos = ["Camisa", "Pantalón", "Zapatos", "Sombrero", "Chaqueta"];

  // utilizamos el método filter para buscar productos que coincidan con la búsqueda

  //let resultado = productos.find(); //5

  // usar for para buscar el producto
  let encontrado = false;
  for (let i = 0; i < productos.length; i++) {
    if (searchInput === productos[i].toLowerCase()) {
      alert("Producto encontrado: " + productos[i]);
      encontrado = true;
      break; // Salimos del bucle si encontramos el producto
    }
  }

  if (!encontrado) {
    alert("Producto no encontrado");
  }

  // Limpiar el input de búsqueda
  // Puede estar en una función aparte, en la de abajo y llamarla aquí
  document.getElementById("search").value = "";
  searchForm.reset();

});




const clearSearching = () =>{
}















