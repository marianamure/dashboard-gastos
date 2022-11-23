const mongoose = require("mongoose");

const EsquemaGastos = new mongoose.Schema({
    fecha : {
        type: Date,
        required: [true, "Fecha obligatoria"],
    },
    gasto: {
        type:Boolean,
        default: false,
    },
    ingreso: {
        type:Boolean,
        default: false
    },
    descripcion: {
        type:String,
        required: [true, "Descripción obligatoria."],
    },
    detalle: {
        type:String,
    },
    monto: {
        type: Number,
        required: [true, " El parámetro monto es obligatorio."],
    },
    imgfactura:{
        type: String,
    },
}, {timestamps: true, versionKey:false})
//timestamps: true es para createdAt y updatedAt
//versionKey: false es para eliminar un campo _v

const Gastos = mongoose.model("gastos", EsquemaGastos);

module.exports = Gastos;