const Pool = require("pg").Pool;
//require('dotenv').config();



const pool = new Pool({
    user: 'sagvlgma',
    password: 'zsnnSdlBcDPNxUTLyWvTAiJIXXiiQhwW',
    database: 'sagvlgma',
    host: 'queenie.db.elephantsql.com',
    port: 5432
});


module.exports = pool;