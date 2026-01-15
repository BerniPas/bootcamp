

// 1. Capturamos el div principal
const divPrincipal = document.getElementById('principal');

// 2. Creamos la barra de navegación
let navegacion = document.createElement("nav");

// 3. Le agregamos algunos estilos a la barra de navegación
navegacion.style.backgroundColor = "#2C0C64";
navegacion.style.width = "100%";
navegacion.style.height = "60px";
navegacion.style.display = "flex";
navegacion.style.alignItems = "center";
navegacion.style.paddingLeft = "20px";


// 4. Agregamos la barra de navegación al div principal
divPrincipal.appendChild(navegacion)

// 5. Agregamos un evento a la navegación
/* navegacion.addEventListener("click", () => {
    alert("Haz hecho click en la barra de navegación");
}); */

// 6. Creamos la lista de de navegación
let listaNavegacion = document.createElement("ul");

// 7. Creamos las 3 items list para la navegación
let listHome = document.createElement("li");
listHome.innerText = "Home";
listHome.style.display = "inline";
listHome.style.color = "white";
listHome.style.cursor = "pointer";
listHome.addEventListener("click", () => {
    window.location.href = "../index.html";
});

/* // 8. Creamos el ancla para el item Home
let anclaHome = document.createElement("a");
anclaHome.href = "../index.html"; */

// Agregamos el ancla al item de lista
/* listHome.appendChild(anclaHome); */

// 9. Agregamos el pimer item a la lista de navegación
listaNavegacion.appendChild(listHome);



let listProductos = document.createElement("li");
listProductos.innerText = "Productos";
listProductos.style.display = "inline";
listProductos.style.color = "white";
listProductos.style.marginLeft = "20px";
listProductos.style.cursor = "pointer";
listProductos.addEventListener("click", () => {
    window.location.href = "./productos.html";
});

listaNavegacion.appendChild(listProductos);

let listFormulario = document.createElement("li");
listFormulario.innerText = "Formulario";
listFormulario.style.display = "inline";
listFormulario.style.color = "white";
listFormulario.style.marginLeft = "20px";
listFormulario.style.cursor = "pointer";
listFormulario.addEventListener("click", () => {
    window.location.href = "./formulario.html";
});

listaNavegacion.appendChild(listFormulario);

//10. Subimos el ul a la barra de navegación
navegacion.appendChild(listaNavegacion);

