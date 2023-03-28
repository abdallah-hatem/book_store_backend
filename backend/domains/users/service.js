const { db } = require("../../database");

function create(data, callback) {
  const q = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)";

  const { name, email, password } = data;
  const values = [name, email, password];

  db.query(q, [values], (err, res) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, res);
    }
  });
}

function getUsers(callback) {
  const q = "SELECT * FROM users";

  db.query(q, (err, res) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, res);
    }
  });
}

function deleteUserById(id, callback) {
  const q = "DELETE FROM users WHERE id = ?";

  db.query(q, [id], (err, res) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, res);
    }
  });
}

function getUser(id, callback) {
  const q = "SELECT * FROM users WHERE id = ?";

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
    "UPDATE users SET `name` = ?, `email` = ?, `password` = ? WHERE id = ?";

  const { name, email, password, id } = data;
  const values = [name, email, password, id];

  db.query(q, values, (err, res) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, res);
    }
  });
}

function getUserByEmail(email, callback) {
  const q = "SELECT * FROM users WHERE `email` = ?";

  db.query(q, email, (err, res) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, res[0]);
    }
  });
}

module.exports = {
  create,
  getUsers,
  deleteUserById,
  getUser,
  update,
  getUserByEmail,
};
