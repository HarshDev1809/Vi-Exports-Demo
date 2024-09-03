const fs = require("fs");
const path = require("path");
const { getUserByUserName } = require("./users");

const getCartItemsByUsername = (userName)=>{
    const user = getUserByUserName(userName);
    return user["Cart"];
}

module.exports = {
    getCartItemsByUsername
}