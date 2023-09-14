const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/equipos", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("La conexion a DB esta lista"))
    .catch(err => console.log("Algo salio mal al conectar con la DB", err));