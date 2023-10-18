const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "ecomerce",
    password: "123456",
    port: 3306
});

module.exports = pool;