const server = require('./src/server')

const {Character, Film} = require('./src/database')

// Character.list().then(res=>console.log(res))
// Character.get(1).then(res=>console.log(res))

// Character.insert({
//     _id:'505',
//     name: 'Bob',
//     birth_year: '1994',
// }).then(res=>console.log(res))
//Film.list().then(res=>console.log(res))

server.listen(8004, () => {
    console.log('Database service on PORT 8004');
});