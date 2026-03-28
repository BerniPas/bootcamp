
// 1. Importar mongoose para obtener la función de conexión a MongoDB
const mongoose = require('mongoose');

// 2. Importar dotenv para cargar las variables de entorno
const dotenv = require('dotenv');
dotenv.config();


// 3. Obtener la contraseña de MongoDB desde las variables de entorno
const MONGO_PASSWORD = process.env.MONGO_PASSWORD

// 4. Construir la URI de conexión a MongoDB utilizando la contraseña
const uri = `mongodb+srv://pastorbernal:${MONGO_PASSWORD}@cluster0.btrbimd.mongodb.net/ecommerce?appName=Cluster0`;

const clientOptions = { 
  serverApi: 
  { version: '1', 
    strict: true, 
    deprecationErrors: true 
  } 
};

// 5. Crear una función asíncrona para establecer la conexión a MongoDB
async function conexionMongo() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("You successfully connected to MongoDB Atlas!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = conexionMongo;

