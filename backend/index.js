const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');

var app = express();

//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas
app.use('/api/producto', require('./routes/producto.route'));
app.use('/api/espectador', require('./routes/espectador.route'));
app.use('/api/ticket', require('./routes/ticket.route'));
app.use('/api/transaccion', require('./routes/transaccion.route'));
app.use('/api/tipoCategoria', require('./routes/tipoCategoria.route'));

//setting
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});
