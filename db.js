const Pool = require("pg").Pool;
//require('dotenv').config();



const pool = new Pool({
    user: 'sagvlgma',
    password: 'zsnnSdlBcDPNxUTLyWvTAiJIXXiiQhwW',
    database: 'sagvlgma',
    host: 'ueenie.db.elephantsql.com',
    port: 5432
});


module.exports = pool;