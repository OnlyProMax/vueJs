/*Express*/
const express = require('express');
const app = express();
/* Instalamos morgan para visualizar en consola las peticiones que se hagan a nuestro SV */
const morgan = require('morgan');
/* Instalamos el CORS para que puedan hacer peticiones de otros dominios. */
const cors = require('cors');
/* Accedemos al directorio actual */
const path = require('path');
/* Conexión a DB */
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/mevndb';
const options = { useNewUrlParser: true, useCreateIndex: true };

mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
    err => { console.log(err) }
);

app.use(morgan('tiny'));

/* Instalamos el CORS para que puedan hacer peticiones de otros dominios. */
app.use(cors());

/* Traemos Json */
app.use(express.json());
// Para que trabajemos con solicitudes o rtas www-form-encoded.
//aplicaction/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Accedemos a la carpeta public.
app.use(express.static(path.join(__dirname, 'public')));

/* 
Configurando la primer ruta 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

*/  
// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


/* Tomamos el puerto que asigne el SV o el 3000 */
app.set('puerto', process.env.PORT || 3000);

/* Enviamos por defecto el puerto de SV y sino el 3000 */
app.listen( app.get('puerto'), function(){
    console.log('Escuchando el puerto: ', app.get('puerto'));
});

