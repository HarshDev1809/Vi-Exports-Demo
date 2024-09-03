const { placeOrder, getAllOrders } = require("../controllers/orders.controller");
const { verifyOrder } = require("../middlwares/order.middleware");
const { verifyToken } = require("../middlwares/token.middleware");

module.exports = (app)=>{
    app.get("/orders/getOrders",getAllOrders);
    app.post("/orders/placeOrder",[verifyToken,verifyOrder],placeOrder);
}