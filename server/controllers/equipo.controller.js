const Equipo = require("../models/equipo.model")

module.exports.todos = (req, res) => {
    Equipo.find()
        .then(equipos => res.json(equipos))
        .catch(err => {res.status(400).json(err)});
}

module.exports.equipo = (req, res) => {
    Equipo.findOne({ _id: req.params.id })
        .then(equipo => res.json(equipo))
        .catch(err => {res.status(400).json(err)});
}

module.exports.nuevo = (req, res) => {
    Equipo.create( req.body )
        .then(equipo => res.json(equipo))
        .catch(err => {res.status(400).json(err)});
}

module.exports.editar = (req, res) => {
    Equipo.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then(equipo => res.json(equipo))
        .catch(err => {res.status(400).json(err)});
        
}

module.exports.borrar = (req, res) => {
    Equipo.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => {res.status(400).json(err)});
}

