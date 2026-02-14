
//#############################
// Configuramos el servidor en este archivo index.js
//#############################

// 1. Módulos importados - lo instalamos con npm i
const express = require("express");
const path = require("path");
const dotenv = require("dotenv") // librería para privacidad de passwords
const hbs = require("express-handlebars")

// ejecutamos la configuración de dotenv
dotenv.config();

// inicializamos las variables
const app = express();
const PORT = process.env.PORT || 9000 // traemos datos del archivo .env 

// 2. Módulos nativos de Node - no los instalamos con npm
const os = require("node:os");
const fs = require("node:fs");


// 3. Middelwares 
app.use(express.json())

// Uun get de salud del servidor
app.get("/health", (req, res)=>{
    res.send("Servidor OK")
})

// 4. Rutas del GET - Obtiene datos del servidor
app.get("/html", (req, res)=>{
  // enviar html
    res.send(`
      <body><!-- Contiene los elementos visibles de la página -->

    <!-- Cabecera de Página -->
    <header>

    </header>
    
    <!-- Barra de Navegación -->
    <nav>
        <ul>
            <li>
                <a href="./pages/sucursales.html"><!-- link para una ruta relativa: dentro de mis archivos -->
                    Sucursales
                </a>
            </li>
            <li>
                <a href="https://www.educacionit.com/bootcamp-full-stack"><!-- link a una ruta absoluta: fuera de mis archivos -->
                    EducaciónIT
                </a>
            </li>
            <li>
                <a href="./assets/datosGithub.pdf" download><!-- link para descargar un archivo -->
                    Descarga los datos de GitHub
                </a>
            </li>
            <li>
                <a href="./pages/disney.html">
                    Disney
                </a>
            </li>
        </ul>
    </nav>
    
    <!-- Contenido Principal de la página -->
    <main>
        
        <!-- Sección 1 de contenido -->
        <section>
            <h1> <!-- Etiqueta de apertura - alt + shift + A -->
                Hola Mundo <!-- Contenido de la etiqueta -->
            </h1> <!-- Etiqueta de cierre -->
            
            <!-- Artículo: Ej. Fútbol - Niños -->
            <article>
                <h2 title="Título de la sección">
                    Bienvenido a la página de ventas de zapatillas
                </h2>
                <!-- Imagen representativa del artículo -->
                <figure>
                    <!-- Imagen -->
                    <img src="https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000" alt="Messi con la Selección Argentina" title="Messi con la Selección Argentina"><!-- No tiene etiqueta de cierre, src: fuente de la imagen -->
                    <figcaption>
                        Messi con la Selección Argentina
                    </figcaption>
                </figure>
                
            </article>
        </section>
        
        <section>
            <h1>Sección 2: Listas Ordenadas y Desordenadas</h1>
            <ol type="1" start="10"><!-- listas ordenadas numéricas por default -->
                <li>Azúcar</li><!-- items de las listas -->
                <li>Sal</li>
                <li>Arroz</li>
            </ol>
        
            <ol type="A"> <!-- listas ordenadas alfabéticas -->
                <li>Harina</li>
                <li>Leche</li>
                <li>Huevos</li>
            </ol>
        
            <ol type="I"><!-- listas ordenadas numéricas romanas -->
                <li>Pan</li>
                <li>Manteca</li>
                <li>Queso</li>
            </ol>
        </section>

        <section>
            <h2>
                GitHub - Crear Repo
            </h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque praesentium obcaecati vitae dignissimos aut ratione provident molestiae maiores rem porro. Dolorem in reprehenderit commodi magni nobis perspiciatis modi, odit voluptate!
            </p>
        </section>
    </main>

    <!-- Pie de Página -->
    <footer>
        <p>&copy; 2023 Tu Nombre. Todos los derechos reservados.</p>
        <p>
            Envianos un mail a: 
            <a href="mailto:pepe@example.com">
                pepe@example.com
            </a>
        </p>
        <p>
            También puedes llamarnos al:
            <a href="tel:+545596359">
                +54 559 6359
            </a>
        </p>
    </footer>

</body>
    `);
});

app.get("/descargas", (req, res)=>{
  // descargar un archivo
    res.download("./hola.pdf", "clase 07.pdf")
})

app.get("/json", (req, res)=>{
  // respondemos con datos de tipo json
    const persona = {
        nombre: "Pedro",
        dni: 123456789,
        provincia: "CABA"
    }

    res.json(persona)
})

app.get("/file", (req, res)=>{
  // respondemos con un archivo
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/template", (req, res)=>{
  // respondemos con unos datos del so 
    const datosSO = {
        // obtenemos datos del sistema operativo con el módulo os
        plataforma: os.platform(),
        // obtenemos la versión del sistema operativo con el módulo os
        version: os.version(),
        // obtenemos la memoria total del sistema operativo con el módulo os
        // lo medimos en bytes, por eso lo dividimos por 1024 para pasarlo a KB, y luego por 1024 para pasarlo a MB
        memoriaTotal: os.totalmem(),
        memoriaLibre: os.freemem()
    }

    let total = datosSO.memoriaTotal / 1024 / 1024
    let libre = datosSO.memoriaLibre / 1024 / 1024

    res.send(`<h1>Datos del Sistema Operativo</h1>
    <ul>
        <li>Plataforma: ${datosSO.plataforma}</li>      
        <li>Versión: ${datosSO.version}</li>
        <li>Memoria Total: ${total.toFixed(2)} MB</li>
        <li>Memoria Libre: ${libre.toFixed(2)} MB</li>
    </ul>`)
});

// lo llevamos al server.js para levantar el servidor
/* app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
}); */

// no vamos a levantar el servidor en este archivo
// Paso importante: exportar la app configurada con los datos de arriba
// exportamos la app para usarla en otro archivo, por ejemplo en server.js
// esportamos un solo valor, que es la app configurada con los datos de arriba
module.exports = app
