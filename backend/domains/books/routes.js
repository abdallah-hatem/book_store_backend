const express = require("express");
const { getAllBooks } = require("./controller");

const router = express.Router();

router.route("/books").get(getAllBooks);

module.exports = router;
