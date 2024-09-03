const fs = require("fs");
const path = require("path");
const { getProducts } = require("../utils/products");

exports.getAllProducts = async (req, res) => {
  try {
    const products = getProducts();
    return res.json(products);
  } catch (err) {
    return res.status(500).send("something went wrong");
  }
};

exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const products = getProducts();
    if (!products) {
      return res.status(500).send({ message: "Couldn't fetch data" });
    }
    const product = products.find((product) => product["Product ID"] == id);

    if (product) {
      return res.status(200).send(product); // 200 OK is more appropriate for a successful GET request
    } else {
      return res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    return res.status(500).send({ message: "error" });
  }
};


