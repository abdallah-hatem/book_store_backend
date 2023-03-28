const {
  create,
  getUsers,
  deleteUserById,
  getUser,
  update,
  getUserByEmail,
} = require("./service");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Get All Users
async function getAllUsers(req, res) {
  getUsers((err, data) => {
    if (err) {
      return res.status(500).send({ error: err });
    } else {
      res.status(200).send({ data });
    }
  });
}

// Add A User
async function addUser(req, res) {
  const data = req.body;
  const hashedPassword = await bcrypt.hash(data.password, 10);

  data.password = hashedPassword;

  create(data, (err, data) => {
    if (err) {
      return res.status(500).send({ error: err });
    } else {
      res.status(200).send({ message: "User Added Successfully", data });
    }
  });
}

// Delete A User
async function deleteUser(req, res) {
  const bookId = req.params.id;

  deleteUserById([bookId], (err, data) => {
    if (err) {
      return res.status(500).send({ error: err });
    } else {
      res
        .status(200)
        .send({ message: "User has been deleted successfully", data });
    }
  });
}

// Get User By Id
async function getUserById(req, res) {
  const bookId = req.params.id;

  getUser([bookId], (err, data) => {
    if (err) {
      return res.status(500).send({ error: err });
    } else {
      res.status(200).send({ data });
    }
  });
}

// Update User
async function updateUser(req, res) {
  const bookId = req.params.id;
  const data = req.body;

  data.id = bookId;

  update(data, (err, data) => {
    if (err) {
      return res.send({ error: err });
    } else {
      res.status(200).send({ message: "User Updated Successfully", data });
    }
  });
}

// Login
async function login(req, res) {
  const { email, password } = req.body;

  getUserByEmail(email, (err, result) => {
    if (err) {
      return res.send({ error: err });
    }

    if (!result) {
      return res.status(404).send({ message: "Email not found" });
    }

    validPass = bcrypt.compareSync(password, result.password);

    if (!validPass) {
      return res.status(404).send({ message: "Invalid password" });
    }

    result.password = undefined;

    const token = jwt.sign({ result: result }, "SecretKey", {
      expiresIn: "1h",
    });

    return res.status(200).send({ message: "Login Successfully", token });
  });
}

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
  getUserById,
  updateUser,
  login,
};
