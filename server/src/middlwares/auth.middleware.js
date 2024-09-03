const { getUsers } = require("../utils/users");

const verifySignUp = async (req, res, next) => {
  const { userName, password, emailId, firstName, lastName } = req.body;
  if (!userName) {
    return res.status(400).send({ message: "Username Can't be Empty" });
  }

  if (!emailId) {
    return res.status(400).send({ message: "Email Id Can't be Empty" });
  }

  if (!password) {
    return res.status(400).send({ message: "Password Can't be Empty" });
  }

  if (!firstName) {
    return res.status(400).send({ message: "First Name can't be empty!" });
  }

  if (!lastName) {
    return res.status(400).send({ message: "Last name can't be empty!" });
  }

  try {
    const users = getUsers();
    console.log(users);
    const user = users.find(
      (user) => user["Username"] == userName || user["Email ID"] == emailId
    );

    if (user) {
      return res
        .status(400)
        .send({ message: "Username or Email ID already on use!" });
    } else {
      next();
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

const verifySignIn = (req, res, next) => {
  const { userName, password } = req.body;
  if (!userName) {
    return res.status(400).send({ message: "Username Can't be Empty" });
  }

  if (!password) {
    return res.status(400).send({ message: "Password Can't be Empty" });
  }

  next();
};

module.exports = {
  verifySignUp,
  verifySignIn,
};
