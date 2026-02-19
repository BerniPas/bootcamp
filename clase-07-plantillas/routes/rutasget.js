
// Trabajamos con rutas del GET para enviar datos al cliente

// 1. importamos router de express
const { Router } = require("express");// enrutador de express para organizar las rutas

// 2. inicializamos el router
const router = Router();

const os = require("node:os");

// 3. Creamos las rutas del GET con la variable router: que es un enrutador de express  
router.get("/html", (req, res)=>{
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

router.get("/descargas", (req, res)=>{
  // descargar un archivo
    res.download("./hola.pdf", "clase 07.pdf")
})

router.get("/json", (req, res)=>{
  // respondemos con datos de tipo json
    const persona = {
        nombre: "Pedro",
        dni: 123456789,
        provincia: "CABA"
    }

    res.json(persona)
})

router.get("/file", (req, res)=>{
  // respondemos con un archivo
    res.sendFile(path.join(__dirname, "index.html"))
});

router.get("/template", (req, res)=>{
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


// 4. Exportamos el router para usarlo en index.js
module.exports = router

