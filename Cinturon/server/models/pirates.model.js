const mongoose = require('mongoose');


const EsquemaPirates = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Nombre obligatorio."],
        minlength: [2, "El parámetro nombre debe tener al menos 2 caracteres"]
    },
    imagepirate: {
        type: String,
        required: [true, "URL de imagen obligatoria."],
        minlength: [3, "URL debe tener al menos 3 caracteres"]
    },
    treasure: {
        type: Number,
        required: [true, " El parámetro número de tesoros obligatorio"],
    },
    pcatch: {
        type: String,
        required: [true, "Catch Obligatorio."],
        minlength: [3, "El parámetro Catch debe tener al menos 3 caracteres"]
    },
    crewPosition: {
        type: String,
        required: [true, "Posición Obligatoria."],
    },
    pegLeg: {
        type:Boolean,
        required: [true, "Peg Leg Obligatorio."],
        default: true
    },
    eyePatch: {
        type:Boolean,
        required: [true, "Eye Patch Obligatorio."],
        default: true
    },
    hookHand: {
        type:Boolean,
        required: [true, "Hook Hand Obligatorio."],
        default: true
    },
}, { timestamps: true, versionKey: false });
//timestamps crea campos de createdAt y updatedAt
//versionKey: false elimina el campo _v


const Pirates = mongoose.model("pirates", EsquemaPirates);

module.exports = Pirates;