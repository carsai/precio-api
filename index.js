require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { conectarDB } = require('./db/config');

const app = express();

// DB
conectarDB();

// Cors
app.use(cors({ origin: process.env.ORIGEN }));

// Parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Publico
app.use(express.static('public'));

// Routes
app.use('/api/mercado', require('./routes/mercados'));
app.use('/api/producto', require('./routes/productos'));
app.use('/api/marca', require('./routes/marcas'));
app.use('/api/provincia', require('./routes/provincias'));
app.use('/api/poblacion', require('./routes/poblacion'));

// eslint-disable-next-line no-console
app.listen(process.env.PUERTO, () => console.log(`iniciado en puerto ${process.env.PUERTO}`));
