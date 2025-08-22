const { Pool } = require("pg");
const dotEnv = require("dotenv");
dotEnv.config();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://postgres:postgres@postgres:5432/mydb",
});

module.exports = pool;
