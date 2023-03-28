const express = require("express");
const router = express.Router();

const booksRoutes = require("../domains/books");
const usersRoutes = require("../domains/users");

router.use(booksRoutes);
router.use(usersRoutes);

module.exports = router;
