// Create the connection pool. The pool-specific settings are the defaults
const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

console.log(process.env.DB_USERNAME);

module.exports = dbPool.promise();
