import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
  user: "admi",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "tasksDB",
});
export default pool;
