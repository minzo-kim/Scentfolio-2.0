const { Pool } = require('pg');
const PG_URI =
    'postgres://ipnkdwia:STvLwhIAdKa6_raqF8XDuSOWGVr0SvgR@stampy.db.elephantsql.com/ipnkdwia';

const pool = new Pool({
    connectionString: PG_URI,
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query to DB', text);
        return pool.query(text, params, callbck);
    },
};
