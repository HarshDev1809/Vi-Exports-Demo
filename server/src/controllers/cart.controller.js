const fs = require("fs");
const path = require("path");
const {
  getUsers,
  getUserIndex,
  getUserByUserName,
  updateUsers,
} = require("../utils/users");
const { hasSubscribers } = require("diagnostics_channel");
const { getProducts, getProductIndex } = require("../utils/products");

exports.getCartItems = async (req, res) => {
  const { userName } = req;
  const user = getUserByUserName(userName);

  return res.status(200).send(user["Cart"]);
};

exports.addToCart = async (req, res) => {
  const { userName } = req;
  console.log(req.body);
  const { productId, size, quantity, productName, productImage, productPrice } =
    req.body;
  const users = getUsers();
  const userIndex = getUserIndex(userName);
  const user = users[userIndex];
  const cart = user["Cart"];
  const cartItemIndex = cart.findIndex(
    (item) => item["Product ID"] === productId
  );
  //   const products = getProducts();
  //   const productIndex = getProductIndex(productId);
  //   const product = products[productIndex];

  if (cartItemIndex === -1) {
    cart.push({
      "Product ID": productId,
      Size: size,
      Quantity: quantity,
      "Product name": productName,
      "Product image": productImage,
      "Product price": productPrice,
    });
  } else {
    cart[cartItemIndex]["Quantity"] = quantity;
  }
  updateUsers(users);
  const response = {
    "Product ID": productId,
    Size: size,
    Quantity: quantity,
    "Product name": productName,
    "Product image": productImage,
    "Product price": productPrice,
  };
  return res.status(200).send(response);
};
