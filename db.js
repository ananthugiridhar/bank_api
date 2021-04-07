const Pool = require("pg").Pool;
require('dotenv').config();

const userid = (process.env.DB_USER);
const password = (process.env.DB_PASSWORD);
const database = (process.env.DB_DATABASE);
const host = (process.env.DB_HOST);
const port = process.env.DB_PORT;


const pool = new Pool({
    user: userid,
    password: password,
    database: database,
    host: host,
    port: port
});


module.exports = pool;