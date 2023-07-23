const { Pool } = require('pg');

const pool = new Pool({
    user: 'swahil',
    host:'localhost',
    database: 'npci',
    password: 'qwerty1234',
    port:5432,
});


module.exports = { pool };