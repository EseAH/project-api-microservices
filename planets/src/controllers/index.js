const {catchedAsync} = require('../utils')
//catchedAsync maneja los errores de todas las funciones controladoras
module.exports = {
    getPlanets: catchedAsync(require('./getPlanets')),
    //createCharacter: catchedAsync(require('./createCharacter')),
};