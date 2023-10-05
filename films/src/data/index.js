const films = require('./films.json');

module.exports = {
    list: async () => {
        return films;
    },
    // create: async () => {
    //     throw Error('Hay un error en BD al momento de crear el film')
    // }
}