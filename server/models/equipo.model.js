const mongoose = require("mongoose");

const EsquemaEquipo = new mongoose.Schema ({
    nombre:{
        type: String,
        required: [true, "Este espacio es obligatorio"],
        minLength: [2, "El nombre debe tener al menos 2 caracteres"]
    }, 
    posicion: String
}, {timestamps: true, versionKey: false});

const Equipo = mongoose.model("Equipo", EsquemaEquipo);
module.exports = Equipo;