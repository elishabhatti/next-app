import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "elishajameelmysql@#$123",
  database: "hospital_db",
});

try {
  const connection = await db.getConnection();
  console.log(connection);
  connection.release();
} catch (error) {
  console.error(error);
  process.exit(1);
}
