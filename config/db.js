import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "elishajameelmysql@#$123",
  database: "hospital_db",
});
