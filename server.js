const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 3001;
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.static('assets'));

app.get('/clientes', async (req, res) => {
    // try{
    const contenido = await fs.promises.readFile(path.join(__dirname, 'src', 'assets', 'datos.json'));
    res.json(JSON.parse(contenido));
});

app.post('/cliente', async (req, res) => {
    try {
        const id = req.body.id;
        const contenido = await fs.promises.readFile(path.join(__dirname, 'src', 'assets', 'datos.json'), 'utf-8');
        const contenidoJSON = JSON.parse(contenido);
        const datosCliente = contenidoJSON.filter(datos => datos.id === id);
        res.json(datosCliente);
    } catch (error) {
        console.log('Error al seleccionar los datos del cliente');
    }
});

app.listen(port, () => {
    console.log(`server escuchando en http://localhost:${port} `);
});
