const EquipoController = require("../controllers/equipo.controller");

module.exports = (app) => { 
    app.get("/api/equipos/", EquipoController.todos);
    app.get("/api/equipos/:id", EquipoController.equipo);
    app.post("/api/equipos/", EquipoController.nuevo);
    app.put("/api/equipos/:id", EquipoController.editar);
    app.delete("/api/equipos/:id", EquipoController.borrar);
}