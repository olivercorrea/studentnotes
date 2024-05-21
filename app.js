const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Note = require('./models/Note');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost/notesdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.error('No se pudo conectar a MongoDB...', err));

// Middleware para parsear el body de los requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas para servir las vistas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/lista', async (req, res) => {
    const notes = await Note.find();
    res.render('lista', { notes });
});

// Para utilizar las rutas
const notesRouter = require('./routes/notes') ;
// const Note = require('./models/Note'); // No es necesario
app.use('/api/notes', notesRouter);

// Para usar EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Puerto
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));
