
// Creamo un array
let numeros = [10, 20, 30, 40, 50];

// Creamos una matriz (array bidimensional)
let matriz = [
  [10, 20, 30, 40, 50],
  [5, 10, 15, 20, 25],
  [1, 2, 3, 4, 5]
];

console.log(matriz[0]);    // Primera fila: [10, 20, 30, 40, 50]
console.log(matriz[1][3]); // Segunda fila, cuarto elemento: 20
console.log(matriz[2][0]); // Tercera fila, primer elemento: 1

console.table(matriz); // Muestra la matriz en formato tabla


// Creamos un objeto
let persona = {
  nombre: "Juan", //key: valor
  edad: 25,
  ciudad: "Madrid",
  profesion: "Desarrollador",
  empresa: "Tech Solutions",
  trabajo: "Remoto"
}

let personaUno = {
  nombre: "Pepe", //key: valor
  edad: 25,
  ciudad: "Madrid",
  profesion: "Desarrollador",
  empresa: "Tech Solutions",
  trabajo: "Remoto"
}

let personaDos = {
  nombre: "Carlos", //key: valor
  edad: 25,
  ciudad: "Madrid",
  profesion: "Desarrollador",
  empresa: "Tech Solutions",
  trabajo: "Remoto"
}

// crearmos un array de objetos
let empleados = [persona, personaUno, personaDos];

// función para mostrar un empleado
function mostrarEmpleado(empleado){
  return empleado.nombre == "Juan";
}

// busco un empleado que se llame "Pepe"
let empleadoEncontrado = empleados.find(function(empleado){
  return empleado.nombre === "Carlos";
});

let otroEmpleado = empleados.find(mostrarEmpleado);

console.log(empleadoEncontrado);
console.log(otroEmpleado);




