const db = require("../../database");

// Get All Books
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

// Add A Book
async function addBook(req, res) {
  const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)";
  const { title, desc, cover } = req.body;

  const values = [title, desc, cover];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.send({ error: err });
    } else {
      res.status(200).send({ message: "Book Added Successfully", data });
    }
  });
}

module.exports = { getAllBooks, addBook };
