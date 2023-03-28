const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test",
});

async function dbConnect() {
  db.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database connected");
    }
  });
}

module.exports = { dbConnect, db };
