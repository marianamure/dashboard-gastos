const Pirate = require("../models/pirates.model");

module.exports.create_pirate = (req, res) => {
    Pirate.create(req.body)
        .then(pirate => res.json(pirate))
        .catch(err => 
            {
                console.log(err);
                res.status(400).json(err);
            })
}

module.exports.get_allpirates = (req, res) => {
    Pirate.find().sort({name: 1})
        .then(pirates => res.json(pirates))
        .catch(err => 
            {
                console.log(err);
                res.status(404).json({ message: "Error" + err });
            })
}

module.exports.get_pirate = (req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then(pirate => res.json(pirate))
        .catch(err => 
            {
                console.log(err);
                res.status(404).json({ message: "Error" + err });
            })
}


module.exports.delete_pirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => 
            {
                console.log(err);
                res.status(400).json({ message: "Error" + err });
            })
}