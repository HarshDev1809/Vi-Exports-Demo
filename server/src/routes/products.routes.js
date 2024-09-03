const {
  getAllProducts,
  getProductById,
} = require("../controllers/products.controller");

module.exports = (app) => {
  app.get("/products", getAllProducts);
  app.get("/products/:id",getProductById);
};
