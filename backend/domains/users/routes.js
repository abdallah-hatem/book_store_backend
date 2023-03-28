const express = require("express");
const {
  getAllUsers,
  addUser,
  deleteUser,
  getUserById,
  updateUser,
  login,
} = require("./controller");

const router = express.Router();
const { tokenValidation } = require("../../middleware/tokenValidation");

router
  .route("/users")
  .get(tokenValidation, getAllUsers)
  .post(tokenValidation, addUser);

router
  .route("/users/:id")
  .get(tokenValidation, getUserById)
  .put(tokenValidation, updateUser)
  .delete(tokenValidation, deleteUser);

router.route("/login").post(login);

module.exports = router;
