const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Ruta para obtener todos las notas
router.get('/', async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
});

// Ruta para crear una nueva nota
router.post('/', async (req, res) => {
    let note = new Note({
        nombreTarea: req.body.nombreTarea,
        fechaCalificacion: req.body.fechaCalificacion,
        estudiante: req.body.estudiante,
        descripcion: req.body.descripcion,
        calificacion: req.body.calificacion,
        imagenUrl: req.body.imagenUrl
    });
    note = await note.save();
});

module.exports = router;
