const {
  create,
  getBooks,
  deleteBookById,
  getBook,
  update,
} = require("./service");

// Get All Books
async function getAllBooks(req, res) {
  getBooks((err, data) => {
    if (err) {
      return res.status(500).send({ error: err });
    } else {
      res.status(200).send({ data });
    }
  });
}

// Add A Book
async function addBook(req, res) {
  const data = req.body;

  create(data, (err, data) => {
    if (err) {
      return res.status(500).send({ error: err });
    } else {
      res.status(200).send({ message: "Book Added Successfully", data });
    }
  });
}

// Delete A Book
async function deleteBook(req, res) {
  const bookId = req.params.id;

  deleteBookById([bookId], (err, data) => {
    if (err) {
      return res.status(500).send({ error: err });
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

  getBook([bookId], (err, data) => {
    if (err) {
      return res.status(500).send({ error: err });
    } else {
      res.status(200).send({ data });
    }
  });
}

// Update Book
async function UpdateBook(req, res) {
  const bookId = req.params.id;
  const data = req.body;

  data.id = bookId;

  update(data, (err, data) => {
    if (err) {
      return res.send({ error: err });
    } else {
      res.status(200).send({ message: "Book Updated Successfully", data });
    }
  });
}

module.exports = { getAllBooks, addBook, deleteBook, getBookById, UpdateBook };
