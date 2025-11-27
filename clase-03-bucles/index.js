
// indice; orden; posición
//                  0       1         2
let productos = ['coca', 'pepsi', 'sprite'] /* arreglo o array de datos */

//              0    1    2
let precios = [150, 140, 130] /* arreglo o array de datos */

//               0       1      2
let empleado = ['juan', 25, 'Córdoba'] /* arreglo o array de datos */


/* 
let pan = 'pan'
let leche = 'leche'
let queso = 'queso'
let huevos = 'huevos'
*/

console.log(productos);
console.log(productos.length);



//acceso a los elementos del array por el indice
console.log(productos[0]) // 'coca'
console.log(productos[1]) // 'pepsi'
console.log(productos[2]) // 'sprite'


// acceso mediante los bucles
// for
for (let i = 0; i < productos.length; i++) {
  console.log('Productos: ' + productos[i]);
} 

// while
let cargaDatos = confirm('Desea cargar un producto? (si/no)') 
let indice = 0

while (cargaDatos) {
  let nombreProducto = prompt('Ingrese el nombre del producto')

  productos.push(nombreProducto)

  console.log(productos);
  

}