const fs = require("fs");
const path = require("path");
const { getUsers, updateUsers, getUserByUserName } = require("../utils/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../../configs/auth.config");

exports.getAllUsers = async (req, res) => {
  try {
    const users = getUsers();
    return res.json(users);
  } catch (err) {
    return res.status(500).send({ message: "something went wrong!" });
  }
};

exports.signUp = async (req, res) => {
  const { firstName, lastName, userName, password, emailId } = req.body;
  try {
    const user = getUsers();
    const newPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      "User ID": Date.now(),
      "First name": firstName,
      "Last name": lastName,
      Username: userName,
      "Email ID": emailId,
      Password: newPassword,
      "Phone number": "",
      Favorite: [],
      Cart: [],
      Address: {
        Name: "",
        "Local phone number": "",
        "House no.": "",
        Street: "",
        Landmark: "",
        District: "",
        City: "",
        State: "",
        "Pin code": "",
      },
      "Order History": [],
    };

    user.push(newUser);
    const result = updateUsers(user);
    const token = jwt.sign({ userName: user["Username"] }, SECRET, {
      expiresIn: "1h",
    });

    const response = {
      userName: newUser["Username"],
      emailId: newUser["Email Id"],
      name: newUser["First name"] + " " + newUser["Last name"],
      accessToken: token,
    };

    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send({ message: "Something went wrong!" });
  }
  // return res.send(req.body);
};

exports.signIn = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = getUserByUserName(userName);
    if (!user) {
      return res.status(400).send({ message: "User not found!" });
    }
    const isPasswordValid = bcrypt.compareSync(password, user["Password"]);
    if (isPasswordValid) {
      const token = jwt.sign({ userName: user["Username"] }, SECRET, {
        expiresIn: "1h",
      });

      const response = {
        userName: user["Username"],
        emailId: user["Email Id"],
        name: user["First name"] + " " + user["Last name"],
        accessToken: token,
      };
      return res.status(200).send(response);
    } else {
      return res.status(400).send({ message: "Wrong password!" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "something went wrong!" });
  }
};
