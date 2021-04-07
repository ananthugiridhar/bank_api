const Pool = require("pg").Pool;
// require('dotenv').config();

// const userid = (process.env.DB_USER);
// const password = (process.env.DB_PASSWORD);
// const database = (process.env.DB_DATABASE);
// const host = (process.env.DB_HOST);
// const port = process.env.DB_PORT;


const pool = new Pool({
    user: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 5432
});


module.exports = pool;