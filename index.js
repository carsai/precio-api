const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { conectarDB } = require('./db/config');

const app = express();

conectarDB();

app.use(cors({ origin: process.env.ORIGEN }));

// Parse
app.use(express.json());

// Publico
app.use(express.static('public'));

// Routes
app.use('/api/mercado', require('./routes/mercados'));
app.use('/api/producto', require('./routes/productos'));

// eslint-disable-next-line no-console
app.listen(process.env.PUERTO, () => console.log(`iniciado en puerto ${process.env.PUERTO}`));
