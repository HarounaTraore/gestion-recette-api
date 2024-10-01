import { config } from "dotenv";
import { createPool } from "mysql2/promise";

config();

export const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: false,
});

const connection = async () => {
  try {
    const conn = await pool.getConnection();
    console.log("Connected using connection pool!");
    return conn;
  } catch (err) {
    console.error("Connection failed: ", err.message);
  }
};
connection();
