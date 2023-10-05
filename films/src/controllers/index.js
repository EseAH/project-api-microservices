const {catchedAsync} = require('../utils')
//catchedAsync maneja los errores de todas las funciones controladoras
module.exports = {
    getFilms: catchedAsync(require('./getFilms')),
    //createCharacter: catchedAsync(require('./createCharacter')),
};