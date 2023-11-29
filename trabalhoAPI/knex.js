var knex = require('knex')({
    client:'postgres',
    connection:{
        host:'localhost',
        user:'postgres',
        password:'123456',
        database:'ecomerce'
    }
});

module.exports = knex;