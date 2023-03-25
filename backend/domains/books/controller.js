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

// Delete A Book
async function deleteBook(req, res) {
  const bookId = req.params.id;

  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) {
      return res.send({ error: err });
    } else {
      res
        .status(200)
        .send({ message: "Book has been deleted successfully", data });
    }
  });
}

// Get Book By Id
async function getBookById(req, res) {
  const bookId = req.params.id;

  const q = "SELECT * FROM books WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) {
      return res.send({ error: err });
    } else {
      res.status(200).send({ data });
    }
  });
}

// Update Book
async function UpdateBook(req, res) {
  const bookId = req.params.id;
  const { title, desc, cover } = req.body;

  const values = [title, desc, cover];

  const q =
    "UPDATE books SET `title` = ?, `desc` = ?, `cover` = ? WHERE id = ?";

  db.query(q, [...values, bookId], (err, data) => {
    if (err) {
      return res.send({ error: err });
    } else {
      res.status(200).send({ message: "Book Updated Successfully", data });
    }
  });
}

module.exports = { getAllBooks, addBook, deleteBook, getBookById, UpdateBook };
