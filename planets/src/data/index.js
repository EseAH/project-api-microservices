//const planets = require('./planets.json');
const axios = require('axios')

module.exports = {
    list: async () => {
        const res = await axios.get("http://database:8004/Planet")
        return res.data;
    },
    // create: async () => {
    //     throw Error('Hay un error en BD al momento de crear el film')
    // }
}