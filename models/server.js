//REST SERVER BASADO EN CLASES
const express = require('express');
const cors = require('cors');
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';

        //Middleware
        this.middleware();

        //Rutas aplicación
        this.routes();
        
    }
    
    middleware(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use( express.static('public'));
    }

    routes(){
       this.app.use(this.userPath, require('../routes/user') )
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server corriendo el puerto', this.port)
        })
    }
}

module.exports = Server;