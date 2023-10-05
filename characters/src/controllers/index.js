const {catchedAsync} = require('../utils')
//catchedAsync maneja los errores de todas las funciones controladoras
module.exports = {
    getCharacters: catchedAsync(require('./getCharacters')),
    createCharacter: catchedAsync(require('./createCharacter')),
};