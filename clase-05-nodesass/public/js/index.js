

console.log("Bienvenido al Front de la App");

// Crear una función para login del user
// Manejo del DOM
let loginForm = document.getElementById("loginForm");

const loginUser = (e) => {
  e.preventDefault();

  console.log("iniciando login");

  // Capturar los datos del formulario
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Datos hardcodeados del admin - después se hará con base de datos
  let adminUser = "admin@bootcamp.com";
  let adminPassword = "admin123";
  let adminName = "Juan Perez";

  // Creamos la lógica para validar el login
  if (email === adminUser && password === adminPassword) {
    console.log("Login exitoso");

    // Guardar el nombre del usuario en el localStorage
    localStorage.setItem("administrador", adminName);
    localStorage.setItem("email", email);
    localStorage.setItem("isLoggedIn", "true");

    alert("Login exitoso");
    // Redirigir a la página de administración
    window.location.href = "./pages/formulario.html";
  } else {
    console.log("Credenciales inválidas");
    alert("Credenciales inválidas, por favor intente de nuevo.");
  }
  

}


loginForm.addEventListener("submit", loginUser);