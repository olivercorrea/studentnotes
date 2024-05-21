const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    nombreTarea: String,
    fechaCalificacion: Date,
    estudiante: String,
    descripcion: String,
    calificacion: {
        type: Number,
        min: 1,
        max: 20
    },
    imagenUrl: String
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
