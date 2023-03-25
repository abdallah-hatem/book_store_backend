const express = require("express");
const { getAllBooks, addBook } = require("./controller");

const router = express.Router();

router.route("/books").get(getAllBooks).post(addBook);

module.exports = router;
