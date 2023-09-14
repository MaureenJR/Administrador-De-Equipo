const express = require("express");
const app = express();

const cors = require("cors");

app.use( express.json(), express.urlencoded({ extended: true }) );

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL front end
        origin:"http://localhost:3000"
    })
)

//Iniciar DB
require("./server/config/mongoose.config")

//Importamos rutas
const misRutas = require("./server/routes/equipo.routes");
misRutas(app);

//Ejecutar server
app.listen(8000, () => console.log ("Servidor listo!"));