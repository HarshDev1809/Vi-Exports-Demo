const { getCartItems, addToCart } = require("../controllers/cart.controller")
const { verifyCartItems } = require("../middlwares/cart.middleware")
const { verifyToken } = require("../middlwares/token.middleware")

module.exports = (app)=>{
    app.get("/cart/getItems",[verifyToken],getCartItems),
    app.post("/cart/addItem",[verifyToken,verifyCartItems],addToCart);
}