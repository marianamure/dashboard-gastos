//en client
//npx create-react-app client
//cd client

//npm install axios react-router-dom@5.3.0

//En server
//npm init -y
//npm install express mongoose cors
//npm install bcrypt
//npm install jsonwebtoken cookie-parser
// En package.json se debe poner nodemon 

const express = require("express");
const cors = require("cors");
const app = express();

const cookieParser = require('cookie-parser')

//Para usar cookies en la aplicación
app.use(cookieParser());

//Para usar Json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL de front end
        origin: "http://localhost:3000",
        credentials: true //Usuario haya iniciado sesión, es decir que tenga credenciales
    }),
);

//Inicializa BD
require("./server/config/mongoose.config");

//Importamos rutas
const misRutas = require("./server/routes/gastos.routes");
misRutas(app);

//Ejecutamos server
app.listen(8000, ()=>console.log("Servidor listo !"));