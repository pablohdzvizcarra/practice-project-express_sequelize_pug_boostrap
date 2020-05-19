// Importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');


// Configurar express
const app = express();

// Habilitar Pug
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar carpeta estatica llamada public
app.use(express.static(path.join(__dirname, '../public')));

// Cargar las rutas
app.use('/', routes());

app.listen(3000);