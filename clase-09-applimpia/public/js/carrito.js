

console.log("Estamos usando el carrito");

let carrito = document.getElementById('carrito');

function agregarAlCarrito() {
    alert(`Producto agregado al carrito`);

    console.log("Producto agregado al carrito");
}

carrito.addEventListener('click', agregarAlCarrito);
