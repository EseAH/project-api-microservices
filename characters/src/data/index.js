//const characters = require('./characters.json');
const axios = require('axios')

module.exports = {
    list: async () => {
        const res = await axios.get("http://database:8004/Character")
        return res.data;
    },
    create: async () => {
        throw Error('Hay un error en BD al momento de crear el personaje')
    }
}