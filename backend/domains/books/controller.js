const db = require("../../database");

async function getAllBooks(req, res) {
  const q = "SELECT * FROM books";

  db.query(q, (err, data) => {
    if (err) {
      return res.send({ error: err });
    } else {
      res.status(200).send({ data });
    }
  });
}

module.exports = { getAllBooks };
