const Gasto = require("../models/gastos.model");

module.exports.get_allgastos = (req, res) => {
    Gasto.find().sort({fecha: 1})
        .then(gastos => res.json(gastos))
        .catch(err => {
                console.log(err);
                res.status(404).json({ message: "Error" + err });
            })
}
module.exports.create_gasto = (req, res) => {
    Gasto.create(req.body)
        .then(gastos => res.json(gastos))
        .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
}
module.exports.get_gasto = (req, res) => {
    Gasto.findOne({_id: req.params.id})
        .then(gastos => res.json(gastos))
        .catch(err => res.status(400).json(err));
}
module.exports.update_gasto = (req, res) => {
    //new:true nos regresa el documento ya modificado
    //runValidators: true nos revisa una vez más las validaciones del modelo
    Gasto.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(gastos => res.json(gastos))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_gasto = (req, res) => {
    Gasto.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}