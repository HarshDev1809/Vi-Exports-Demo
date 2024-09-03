const jwt = require("jsonwebtoken");
const { SECRET } = require("../../configs/auth.config");

exports.checkToken = (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).send(false);
  }
  try {
    const { userName } = jwt.verify(token, SECRET);
    return res.status(200).send(true);
  } catch (err) {
    return res.status(401).send(false);
  }
};
