const { verify } = require("jsonwebtoken");

function tokenValidation(req, res, next) {
  let token = req.get("authorization");

  if (!token) {
    return res.send({ message: "Access deined! unauthorized user" });
  }

  token = token.slice(7);

  verify(token, "SecretKey", (err, decodeed) => {
    if (err) {
      return res.send({ message: "Invalid token" });
    }

    next();
  });
}

module.exports = { tokenValidation };
