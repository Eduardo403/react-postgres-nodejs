import pkg from "pg";
import { db } from "./consfi.js";

const { Pool } = pkg;
const pool = new Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database,
});
export default pool;
