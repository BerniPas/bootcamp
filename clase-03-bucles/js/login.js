


//1. capaturamos el  formulario
let formulario = document.getElementById("formulario");

//

//2. agregamos el evento al formulario

formulario.addEventListener("submit", function(event) {

  console.log(event);
  

  event.preventDefault(); // para que no se recargue la página

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Credenciales válidas
  let emailValido = "admin@bootcamp.com";
  let passwordValida = "12345678";

  // Validación de campos vacíos
  if (email === "" || password === "") {
    alert("Por favor, complete todos los campos");
    return;
  }

  // Validación de longitud del email
  if (email.length < 8) {
    alert("El email debe tener al menos 8 caracteres");
    return;
  }

  // Validación del login
  if (email === emailValido && password === passwordValida) {
    alert("¡Bienvenido!");
    window.location.href = "./productos.html";
  } else {
    alert("Email o contraseña incorrectos");
    window.location.href = "./error.html";
  }

});


//2. Login con la función onclick

function login() {
  alert("Login con onclick"); 
  formulario.reset();
}
