const characters = require('./characters.json');

module.exports = {
    list: async () => {
        return characters;
    },
    create: async () => {
        throw Error('Hay un error en BD al momento de crear el personaje')
    }
}