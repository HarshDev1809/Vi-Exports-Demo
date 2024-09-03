const fs = require("fs");
const path = require("path");

const getUsers = () => {
  try {
    const filePath = path.join(__dirname, "../../../database/user/user.json");
    const data = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(data);
    return users;
  } catch (err) {
    return false;
  }
};

const updateUsers = (users) => {
  try {
    const filePath = path.join(__dirname, "../../../database/user/user.json");
    const updatedData = JSON.stringify(users, null, 2);
    fs.writeFileSync(filePath, updatedData, "utf8");
    return true;
  } catch (err) {
    return false;
  }
};

const getUserByUserName = (userName) => {
  try {
    const users = getUsers();

    const user = users.find((user) => user["Username"] === userName);

    if (user) {
      return user;
    } else {
      return false;
    }
  } catch (err) {
    return err;
  }
};

const getUserIndex = (userName) => {
  const users = getUsers();
  const index = users.findIndex((user) => user["Username"] === userName);
  return index;
};

module.exports = {
  getUsers,
  updateUsers,
  getUserByUserName,
  getUserIndex
};
