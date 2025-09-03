import mysql from "mysql2/promise";

export const data_conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "aadilmalik1234",
  database: "reno_platforms"
});
