const express = require("express");
const {
  getAllBooks,
  addBook,
  deleteBook,
  getBookById,
  UpdateBook,
} = require("./controller");

const router = express.Router();

router.route("/books").get(getAllBooks).post(addBook);
router.route("/books/:id").delete(deleteBook).get(getBookById).put(UpdateBook);

module.exports = router;
