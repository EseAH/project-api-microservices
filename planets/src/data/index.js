const planets = require('./planets.json');

module.exports = {
    list: async () => {
        return planets;
    },
    // create: async () => {
    //     throw Error('Hay un error en BD al momento de crear el film')
    // }
}