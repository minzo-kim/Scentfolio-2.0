const { Pool } = require('pg');
// require('dotenv').config();
const PG_URI = process.env.POSTGRES_KEY;

const pool = new Pool({
    connectionString: PG_URI,
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query to DB', text);
        return pool.query(text, params, callback);
    },
};
