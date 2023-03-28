const { db } = require("../../database");

function create(data, callback) {
  const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)";

  const { title, desc, cover } = data;
  const values = [title, desc, cover];

  db.query(q, [values], (err, res) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, res);
    }
  });
}

function getBooks(callback) {
  const q = "SELECT * FROM books";

  db.query(q, (err, res) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, res);
    }
  });
}

function deleteBookById(id, callback) {
  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, [id], (err, res) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, res);
    }
  });
}

function getBook(id, callback) {
  const q = "SELECT * FROM books WHERE id = ?";

  db.query(q, [id], (err, res) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, res);
    }
  });
}

function update(data, callback) {
  const q =
    "UPDATE books SET `title` = ?, `desc` = ?, `cover` = ? WHERE id = ?";

  const { title, desc, cover, id } = data;
  const values = [title, desc, cover, id];

  db.query(q, values, (err, res) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, res);
    }
  });
}

module.exports = { create, getBooks, deleteBookById, getBook, update };
