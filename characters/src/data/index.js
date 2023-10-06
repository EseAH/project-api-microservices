//const characters = require('./characters.json');

module.exports = {
    list: async () => {
        const res = await fetch("http://database:8004/Character")
        const { data } = await res.json()
        return data;
    },
    create: async () => {
        throw Error('Hay un error en BD al momento de crear el personaje')
    }
}